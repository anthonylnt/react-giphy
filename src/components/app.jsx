import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'eCwAEs05phtK',
    };
  }

  search = (query) => {
    giphy(process.env.GIPHY_API).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  gifHandler = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif" >
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} gifHandler={this.gifHandler} />
        </div>
      </div>
    );
  }
}

export default App;
