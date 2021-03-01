import React, { Component } from 'react';
import { getMovieReviews } from '../../Utils/Apis';
import Review from './Review';
import PropTypes from 'prop-types';

class Reviews extends Component {
  state = { results: [] };
  componentDidMount() {
    const id = new URLSearchParams(this.props.match.params).get('movieId');

    getMovieReviews(id).then(data => this.setState({ ...data }));
  }
  render() {
    return (
      <div>
        {this.state.results.length > 0
          ? this.state.results.map(item => <Review key={item.id} {...item} />)
          : 'No reviews were found'}
      </div>
    );
  }
}
Reviews.propTypes = {
  id: PropTypes.number,
};

export default Reviews;
