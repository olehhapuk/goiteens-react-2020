import React, { Component } from 'react';

import Modal from './Modal/Modal';
import Timer from './Timer/Timer';
import Poll from './Poll/Poll';

export default class App extends Component {
  state = {
    modalVisible: false,
  };

  handleOpenModal = () => {
    this.setState({ modalVisible: true });
  };

  handleCloseModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleOpenModal}>
          Click Me!
        </button>

        {modalVisible && (
          <Modal onClose={this.handleCloseModal}>
            <Timer />
          </Modal>
        )}

        <hr />

        <Poll />
      </div>
    );
  }
}
