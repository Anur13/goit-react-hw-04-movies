import React, { Component, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Movie from '../../components/Movie/Movie';
import { getMovieById } from '../../Utils/Apis';
// import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo';
// import Cast from '../../components/Cast/Cast';
// import Reviews from '../../components/Reviews/Reviews';
import routes from '../../routes';

const AdditionalInfo = lazy(() =>
  import('../../components/AdditionalInfo/AdditionalInfo'),
);
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));
const Cast = lazy(() => import('../../components/Cast/Cast'));

class MovieDetailsPage extends Component {
  state = { poster: '', genres: [], poster_path: '', id: 0, path: '' };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getMovieById(movieId).then(data => this.setState({ ...data }));

    if (this.props.location.state !== undefined) {
      const { pathname, search } = this.props.location.state.from;
      this.setState({ path: pathname + search });
    }
  }

  HandleGoBack = () => {
    const {
      history: { push },
    } = this.props;
    if (this.state.path !== undefined) {
      push(this.state.path);
    } else {
      push(routes.home);
    }
  };
  render() {
    const { url, path } = this.props.match;
    return (
      <>
        <button type="button" onClick={this.HandleGoBack}>
          Go back
        </button>
        <Movie {...this.state} />
        <AdditionalInfo path={url} id={this.state.id} />
        <Switch>
          <Route
            path={`${path}/cast`}
            render={props => {
              return <Cast {...props} id={this.state.id} />;
            }}
          />
          <Route
            path={`${this.props.match.path}/reviews`}
            render={props => {
              return <Reviews {...props} />;
            }}
          />
        </Switch>
      </>
    );
  }
}
MovieDetailsPage.propTypes = {
  movieId: PropTypes.number,
  url: PropTypes.string,
  path: PropTypes.string,
};

export default MovieDetailsPage;
