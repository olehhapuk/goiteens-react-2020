import { Component } from 'react';
import Loader from 'react-loader-spinner';

import { fetchArticlesByQuery } from '../services/articlesApi';

import ArticlesList from './ArticlesList';
import ArticlesSearchForm from './ArticlesSearchForm';

export default class App extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
    searchQuery: 'react',
    page: 0,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.articles !== this.state.articles) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchArticles = () => {
    this.setState({ loading: true, error: null });

    fetchArticlesByQuery(this.state.searchQuery, this.state.page)
      .then((res) =>
        this.setState((prevState) => {
          return {
            articles: [...prevState.articles, ...res],
            page: prevState.page + 1,
          };
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState(
      {
        searchQuery: query,
        page: 0,
        articles: [],
      },
      this.fetchArticles
    );
  };

  render() {
    const { articles, loading, error } = this.state;

    return (
      <div>
        <ArticlesSearchForm onSubmit={this.handleSearchFormSubmit} />

        {error && <p>Error</p>}

        {articles.length > 0 && <ArticlesList articles={articles} />}

        {loading && <Loader type="TailSpin" />}

        {articles.length > 0 && (
          <button type="button" disabled={loading} onClick={this.fetchArticles}>
            Load More
          </button>
        )}
      </div>
    );
  }
}
