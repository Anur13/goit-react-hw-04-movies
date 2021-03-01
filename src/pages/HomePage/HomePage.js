import React, { Component } from 'react';
import TrendingList from '../../components/TrendingList/TrendingList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Trending today</h1>
        <TrendingList />
      </div>
    );
  }
}

export default Home;
