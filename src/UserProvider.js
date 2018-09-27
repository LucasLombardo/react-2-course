import React, { Component } from 'react';
import { UserContext } from './UserContext';
/* eslint react/no-unused-state: 0 react/prop-types: 0 */
// TODO: handle prop-types checking

export default class UserProvider extends Component {
  state = {
    id: 123,
    name: 'Scott',
    email: 'Scott@LUT.com',
  };

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: '',
    });
  };

  render() {
    return (
      <UserContext.Provider value={{ user: this.state, logout: this.logout }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
