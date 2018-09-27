import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';
/* eslint import/no-unresolved: 0 */
// TODO: fix unresolved path linting
import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';
import User from './User';
import logo from './logo.svg';
import './App.css';
import UserProvider from './UserProvider';

const Header = styles => (
  <Card style={{ ...styles }}>
    <h1>Show Me</h1>
  </Card>
);

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
          <section>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button type="button" onClick={toggle}>
                    Show/Hide
                  </button>
                  <Transition
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                  >
                    {on && Header}
                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section>
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
