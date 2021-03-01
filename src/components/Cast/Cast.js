import React, { Component } from 'react';
import { getMovieCast } from '../../Utils/Apis';
import ActorItem from './ActorItem';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';

class Cast extends Component {
  state = { cast: [], castToShow: [] };
  async componentDidMount() {
    // const { id } = this.props;
    const id = new URLSearchParams(this.props.match.params).get('movieId');

    await getMovieCast(id).then(data => this.setState({ ...data }));
    this.setState({ castToShow: [...this.state.cast] });
  }

  HandleGenderButton = event => {
    const TargetGender = event.target.textContent;
    this.setState({
      castToShow: [
        ...this.state.cast.filter(({ gender }) => {
          switch (TargetGender) {
            case 'Male':
              return gender === 2;
            case 'Female':
              return gender === 1;
            case 'All':
              return gender;
            default:
              return null;
          }
        }),
      ],
    });
  };
  render() {
    return (
      <>
        <button onClick={this.HandleGenderButton} type="button">
          All
        </button>
        <button onClick={this.HandleGenderButton} type="button">
          Male
        </button>
        <button onClick={this.HandleGenderButton} type="button">
          Female
        </button>
        <ul className={styles.Castlist}>
          {this.state.castToShow.map(item => {
            return <ActorItem key={item.id} {...item} />;
          })}
        </ul>
      </>
    );
  }
}
Cast.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Cast;
