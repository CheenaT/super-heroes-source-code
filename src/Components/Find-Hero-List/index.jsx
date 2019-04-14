import SearchBar from "../Search-Bar";
import React from "react";
import uniqueId from "lodash/uniqueId";
import { connect } from "react-redux";
import { getHeroesByUniverse } from "../../redux/selectors";
import { addHero } from "../../redux/actions";

const FindHeroList = ({ heroes, addHero }) => {
  return (
    <div className="find-hero-list">
      <div className="find-hero-list__search-bar">
        <SearchBar />
      </div>
      <div className="find-hero-list__list">
        {heroes.map(hero => (
            <div key={uniqueId()} className="hero-card" onClick={() => addHero(hero)}>
              {
                <img
                  src={hero.image}
                  alt=""
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                  }}
                />
              }
              {
                <div className="hero-name">{hero.name}</div>
              }
            </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { currentUniverse } = state;
  const heroes = getHeroesByUniverse(state, currentUniverse);
  return { heroes };
};

export default connect(
  mapStateToProps,
  { addHero }
)(FindHeroList);
