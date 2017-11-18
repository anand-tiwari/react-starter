import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {

  render() {
    return (
      <div className="jumbotron">
        <h1>React application</h1>
        <p>React, Redux, and React router in Es6 for ultra-responsive web page</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
