import React from "react";
import { ReactComponent as CircleIcon } from "../../images/Ellipse.svg";
import { ReactComponent as RectangleIcon } from "../../images/Rectangle.svg";
import { findHero } from '../../redux/actions';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  state = {
    inputValue: ''
  }
  updateHeroList = input => {
    this.setState({ inputValue: input });
    this.props.findHero(input);
  };
  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="text"
          value={this.props.inputValue}
          onChange={e => this.updateHeroList(e.target.value)}
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

const mapStateToProps = state => {
  return { inputValue: state.filterHeroes };
};

export default connect(mapStateToProps, { findHero })(SearchBar);
