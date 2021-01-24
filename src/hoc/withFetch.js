import { Component } from 'react';

export default function withFetch(func, id, WrappedComponent) {
  return class WithFetch extends Component {
    state = {
      data: [],
      loading: false,
      error: null,
    };

    fetchData = () => {
      this.setState({ loading: true });

      func()
        .then((res) => this.setState({ data: res }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          fetchData={this.fetchData}
        />
      );
    }
  };
}
