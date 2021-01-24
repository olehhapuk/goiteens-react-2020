import { Component } from 'react';

export default class Modal extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return this.props.children(this.state.isOpen, this.toggleModal);
  }
}
