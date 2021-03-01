import React from 'react';
import styles from './Movie.module.css';
import PropTypes from 'prop-types';
import defaultImage from '../../Pictures/кино.jpg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Movie = ({
  original_title,
  vote_average,
  overview,
  genres,
  poster_path,
}) => {
  return (
    <div className={styles.Movie}>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={original_title}
        />
      ) : (
        <img src={defaultImage} alt={original_title} />
      )}

      <div className={styles.info}>
        <h2>{original_title}</h2>
        <CircularProgressbar
          styles={{ root: { width: 150 } }}
          className={styles.Progressbar}
          value={vote_average * 10}
          text={`${vote_average * 10}%`}
        />
        <h3>Overview</h3>
        <p className={styles.review}>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

Movie.propTypes = {
  original_title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
  poster_path: PropTypes.string,
};

export default Movie;
