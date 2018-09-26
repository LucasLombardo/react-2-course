import { Component } from 'react';
/* eslint react/prop-types: 0 react/no-access-state-in-setstate: 0 */
// ^prop types may vary or be nothing, this.state needed in order to toggle

export default class Toggle extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}
