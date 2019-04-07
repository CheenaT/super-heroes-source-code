import React from "react";
import { ReactComponent as CircleIcon } from "../../images/Ellipse.svg";
import { ReactComponent as RectangleIcon } from "../../images/Rectangle.svg";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="text"
          value={this.props.inputValue}
          onChange={this.props.filter}
          placeholder="Hero name"
          aria-label="search-input"
        />
        <button
          className="search-bar__submit-button"
          type="submit"
          aria-label="search-button"
        >
          <CircleIcon />
          <RectangleIcon
            style={{ position: "absolute", top: "10px", left: "11px" }}
          />
        </button>
      </div>
    );
  }
}

export default SearchBar;
