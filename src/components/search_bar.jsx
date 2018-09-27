import React, { Component } from 'react';

class SearchBar extends Component {
  updateHandler = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.updateHandler}
      />
    );
  }
}

export default SearchBar;
