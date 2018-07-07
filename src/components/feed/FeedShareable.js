import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatters';

export default class FeedShareable extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    expiration: PropTypes.string,
    owner: PropTypes.object.isRequired
  };

  render() {
    const { name, expiration, type, owner: { _id, firstName } } = this.props;

    return (
      <li className={type}>
        <h3 className="owner"><Link to={`/friends/${_id}`}>{firstName}</Link> is {type}:</h3>
        <div className="content">
          <h3>{name}</h3>
          {expiration && <h3 className="feed-expiration">by {formatDate(expiration)}</h3>}
        </div>
      </li>
    );
  }
}