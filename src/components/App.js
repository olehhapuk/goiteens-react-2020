import React, { Component } from 'react';

import Layout from './Layout/Layout';
import TaskEditor from './TaskEditor/TaskEditor';

export default class App extends Component {
  state = {
    tasks: [],
  };

  render() {
    return (
      <Layout title="Todo App">
        <TaskEditor />
      </Layout>
    );
  }
}
