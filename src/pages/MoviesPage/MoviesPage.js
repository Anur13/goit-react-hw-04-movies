import React, { Component } from 'react';
import { getMovieByName } from '../../Utils/Apis';
import { Link } from 'react-router-dom';
import styles from './MoviesPage.module.css';
import defaultImage from '../../Pictures/кино.jpg';

class MoviesPage extends Component {
  state = { query: '', movies: [] };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search).get('query');
    if (query) {
      getMovieByName(query).then(data =>
        this.setState({ movies: [...data.results] }),
      );
    }
  }
  HandleInput = event => {
    this.setState({ query: event.target.value });
  };

  HandleSubmit = event => {
    event.preventDefault();
    if (this.state.query.length === 0) {
      this.setState({ movies: [] });
      this.props.history.push({
        pathname: this.props.location.pathname,
      });
    } else {
      getMovieByName(this.state.query).then(data =>
        this.setState({ movies: [...data.results] }),
      );

      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${this.state.query}`,
      });
    }
  };
  render() {
    return (
      <>
        <form onSubmit={this.HandleSubmit}>
          <input onChange={this.HandleInput} type="text" />
          <button type="submit">Search</button>
        </form>
        <div className={styles.LinksList}>
          <ul className={styles.list}>
            {this.state.movies.map(
              ({ id, original_title, name, poster_path }) => {
                return (
                  <li key={id} className={styles.listItem}>
                    <Link
                      to={{
                        pathname: `/movies/${id}`,
                        state: { from: this.props.location },
                      }}
                      key={id}
                    >
                      {poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                          alt={original_title}
                        />
                      ) : (
                        <img
                          height="200"
                          src={defaultImage}
                          alt={original_title}
                        />
                      )}
                      <br />
                      {original_title}
                      {name}
                    </Link>
                  </li>
                );
              },
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default MoviesPage;
