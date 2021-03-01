import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

const Review = ({ content, author }) => {
  let review = '';
  if (content.length > 100) {
    review = content.slice(0, 250) + '...';
  }
  return (
    <div className={styles.Cont}>
      <h3>{author}</h3>
      <p className={styles.review}>{review}</p>
    </div>
  );
};

PropTypes.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string,
};
export default Review;
