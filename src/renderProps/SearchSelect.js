import { Component } from 'react';

export default class SearchSelect extends Component {
  static defaultProps = {
    options: [],
  };

  state = {
    results: this.props.options,
  };

  search = (e) => {
    this.setState({
      results: this.props.filterMethod(e.target.value, this.props.options),
    });
  };

  render() {
    return this.props.children(this.state.results, this.search);
  }
}
