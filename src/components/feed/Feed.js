import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FeedShareable from './FeedShareable';
import { loadFeed } from './actions';
import { getFeed } from './reducers';
import styles from './Feed.css';

class Feed extends PureComponent {
  static propTypes = {
    feed: PropTypes.array.isRequired,
    loadFeed: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadFeed();
  }

  render() {
    const { feed } = this.props;

    if(!feed) return null;

    return (
      <div className={styles.feed}>
        {feed.length > 0 ?
          <ul>
            {feed.map(shareable => <FeedShareable key={shareable._id} {...shareable}/>)}
          </ul> :
          <span>No friends are giving or requesting anything urgent!</span>}
      </div>
    );
  }
}

export default connect(
  state => ({
    feed: getFeed(state)
  }),
  { loadFeed, getFeed }
)(Feed);