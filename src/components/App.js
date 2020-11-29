import { Component } from 'react';

import { fetchImagesByQuery } from '../services/galleryApi';

import Searchbar from './Searchbar';
import Loader from './Loader';
import ImageGallery from './ImageGallery';

export default class App extends Component {
  state = {
    images: [],
    query: '',
    loading: false,
    error: null,
  };

  fetchImages = () => {
    this.setState({ loading: true, error: null });

    fetchImagesByQuery(this.state.query, 1)
      .then((res) =>
        this.setState({
          images: res,
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearch = (searchQuery) => {
    this.setState(
      {
        query: searchQuery,
      },
      this.fetchImages
    );
  };

  render() {
    const { images, loading, error } = this.state;

    return (
      <div className="App">
        <Searchbar onSearch={this.handleSearch} />

        {error && <h3>Error</h3>}

        {loading && <Loader />}

        <ImageGallery images={images} />
      </div>
    );
  }
}
