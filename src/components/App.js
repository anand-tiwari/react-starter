// This component handles the App template used on every page.

import React,{PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import Product from "./product/Product";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
        <Product/>
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {};
}
//export default App;

export default connect(mapStateToProps)(App);
