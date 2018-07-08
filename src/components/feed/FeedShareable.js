import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatters';

export default class FeedShareable extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    expiration: PropTypes.string,
    owner: PropTypes.object.isRequired
  };

  render() {
    const { description, expiration, type, owner: { _id, firstName } } = this.props;

    return (
      <li className={type}>
        <h3 className="owner"><Link to={`/friends/${_id}`}>{firstName}</Link> is {type}:</h3>
        <div className="content">
          <h3>{description}</h3>
          {expiration && <h3 className="feed-expiration">by {formatDate(expiration)}</h3>}
        </div>
      </li>
    );
  }
}