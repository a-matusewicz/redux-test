import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
  }

  onInputChange = (event) => {
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(event.target.value);
  }

  render() {
    return <input id="search-bar" onChange={this.onInputChange} value={this.state.searchterm} />;
  }
}

export default SearchBar;
