import React, { Component, Fragment } from 'react';
/* eslint react/no-unused-state: 0 react/no-multi-comp:0 */
/* eslint import/no-unresolved: 0 react/prop-types: 0 */
// TODO: fix proptypes, fix unresolved path linting
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import User from './User';
import logo from './logo.svg';
import './App.css';
import { UserContext } from './UserContext';

class UserProvider extends Component {
  state = {
    id: 123,
    name: 'Scott',
    email: 'Scott@LUT.com',
  };

  render() {
    return (
      <UserContext.Provider value={{ user: this.state }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <User />
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button type="button" onClick={toggle}>
                  Show/Hide
                </button>
                <Modal on={on} toggle={toggle}>
                  <h1>Still</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

export default App;
