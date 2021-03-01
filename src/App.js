import { Route, NavLink, Switch } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import MoviesDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import routes from '../src/routes';
import React, { lazy, Suspense } from 'react';

const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage'),
);

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul className="header-list">
            <li className="list-item">
              <NavLink
                activeClassName="active-link"
                className="link"
                exact
                to={routes.home}
              >
                Home
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                activeClassName="active-link"
                className="link"
                to={routes.movies}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route
              exact
              path={routes.movies}
              render={props => <MoviesPage {...props} />}
            />
            <Route
              path={routes.movieDetails}
              render={props => <MoviesDetailsPage {...props} />}
            />
            <Route
              path={routes.home}
              render={props => <HomePage {...props} />}
            />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
