import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    // TODO: Remember to call back from the app component
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment ">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Video Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
