import { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import ArticlesList from './ArticlesList';

export default class App extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true, error: null });

    axios
      .get(
        'http://hn.algolia.com/api/v1/search?query=react&page=0&hitsPerPage=5'
      )
      .then((res) => this.setState({ articles: res.data.hits }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { articles, loading, error } = this.state;

    return (
      <div>
        {loading && <Loader type="TailSpin" />}

        {error && <p>Error</p>}

        {articles.length > 0 && <ArticlesList articles={articles} />}
      </div>
    );
  }
}
