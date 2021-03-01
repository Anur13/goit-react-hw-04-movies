import { getTrendingMovies } from '../../Utils/Apis';
import styles from './TrendingList.module.css';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class TrendingList extends Component {
  state = { movies: [], poster: '' };
  componentDidMount() {
    getTrendingMovies().then(data => this.setState({ movies: data.results }));
  }
  render() {
    return (
      <>
        <ul className={styles.list}>
          {this.state.movies.map(
            ({ id, original_title, name, poster_path }) => {
              return (
                <li key={id} className={styles.listItem}>
                  <Link to={`/movies/${id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                      alt=""
                    />
                    <br />
                    {original_title}
                    {name}
                  </Link>
                </li>
              );
            },
          )}
        </ul>
      </>
    );
  }
}

export default TrendingList;
