import React, { Component, Fragment } from 'react';
// eslint-disable-next-line
import { Toggle } from "Utilities";
// eslint-disable-next-line
import { Modal } from "Elements";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
    );
  }
}

export default App;
