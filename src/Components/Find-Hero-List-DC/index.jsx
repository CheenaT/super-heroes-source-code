import SearchBar from "../Search-Bar";
import React from "react";
import uniqueId from "lodash/uniqueId";
import { connect } from 'react-redux';
import { getHeroesDC } from '../../redux/selectors';
import { addHero } from '../../redux/actions';

const FindHeroListDC = ({ heroes, addHero }) => {
    return (
      <div className="find-hero-list">
        <div className="find-hero-list__search-bar">
          <SearchBar />
        </div>
        <div className="find-hero-list__list">
          {
            heroes.map( hero => (
              <a href={'#' + hero.name} key={uniqueId()}>
              <div
                className="hero-card"
                onClick={() => addHero(hero)}
              >
                { <img src={hero.image} alt="" style={{ borderRadius: '8px', objectFit: 'cover', width: '100%', height: '100%'}} />}
              </div>
              </a>
            ))
          }
        </div>
      </div>
    );
};

const mapStateToProps = state => {
  const { currentUniverse } = state;
  const heroes = getHeroesDC(state);
  return { heroes };
}

export default connect(mapStateToProps, {addHero} )(FindHeroListDC);
