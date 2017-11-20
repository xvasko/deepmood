import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginPage } from '../components/login/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
