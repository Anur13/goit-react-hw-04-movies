import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './AdditionalInfo.module.css';
import PropTypes from 'prop-types';

class AdditionalInfo extends Component {
  state = { castIsOpen: false };

  ToggleCast = () => {
    this.setState({ castIsOpen: !this.state.castIsOpen });
  };
  ToggleReviews = () => {
    this.setState({ castIsOpen: false });
  };
  render() {
    const { path } = this.props;
    return (
      <>
        <h3>Additional information</h3>
        <div className={styles.links}>
          <Link
            onClick={this.ToggleCast}
            to={!this.state.castIsOpen ? `${path}/cast` : `${path}`}
          >
            Cast
          </Link>
          <Link onClick={this.ToggleReviews} to={`${path}/reviews`}>
            Reviews
          </Link>
        </div>
      </>
    );
  }
}
AdditionalInfo.propTypes = {
  path: PropTypes.string,
};

export default AdditionalInfo;
