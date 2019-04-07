import SearchBar from "../Search-Bar";
import React from "react";
import uniqueId from "lodash/uniqueId";
import SpiderMan from '../../images/spiderman.svg';
import { els } from './data.js';
import { connect } from 'react-redux';
import { getHeroesByUniverse } from '../../redux/selectors';
import { addTodo } from '../../redux/actions';

const FindHeroList = ({ heroes, addTodo }) => {
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
                onClick={() => addTodo(hero)}
              >
                { <img src={hero.image} alt="" style={{ borderRadius: '8px', objectFit: 'cover', width: '100%', height: '100%'}} />}
              </div>
              </a>
            ))
          }
          {/*
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
          */}
        </div>
      </div>
    );
};

// const mapDispatchToProps = dispatch => ({
//   addHero: hero => dispatch(addHero(hero)),
// })

const mapStateToProps = state => {
  const { currentUniverse } = state;
  const heroes = getHeroesByUniverse(state, currentUniverse);
  return { heroes };
}

export default connect(mapStateToProps, {addTodo} )(FindHeroList);
