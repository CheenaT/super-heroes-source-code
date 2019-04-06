import SearchBar from "../Search-Bar";
import React from "react";
import uniqueId from "lodash/uniqueId";
import SpiderMan from '../../images/spiderman.svg';
import { els } from './data.js';

class FindHeroList extends React.Component {
  render(props) {
    return (
      <div className="find-hero-list">
        <div className="find-hero-list__search-bar">
          <SearchBar inputValue={this.props.filterValue} filter={this.props.filter} />
        </div>
        <div className="find-hero-list__list">
          {
              els[this.props.universe].filter( el => el.name.toLowerCase().indexOf(this.props.filterValue.toLowerCase()) !== -1 ).map( el => (
                <a href={'#' + el.name} key={uniqueId()}>
                <div
                  className="hero-card"
                  onClick={this.props.onAddHero(el)}
                >
                  { <img src={el.image} alt="" style={{ borderRadius: '8px', objectFit: 'cover', width: '100%', height: '100%'}} />}
                </div>
                </a>
              ))
          }
        </div>
      </div>
    );
  }
}

export default FindHeroList;
