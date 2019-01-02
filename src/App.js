import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// explicitly bind dispatchToActions
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest();
    }, 1500);
  }
  onUpdateUser = (e) => {
    this.props.onUpdateUser(e.target.value);
  };

  render() {
    console.log(this.props);
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        <input onChange={this.onUpdateUser} />
        {/* <div onClick={() => this.onUpdateUser()}>Update user</div> */}
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}`
  };
};

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);

// With mapActionsToProps, we don't have to use dispatch
