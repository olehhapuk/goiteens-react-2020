import { Component } from 'react';
import { Header } from 'semantic-ui-react';

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">
          404. Not Found
        </Header>
      </div>
    );
  }
}

export default NotFoundPage;
