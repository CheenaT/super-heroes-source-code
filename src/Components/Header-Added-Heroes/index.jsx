import React from "react";
import HeroCounter from "../../images/HeroCounter.svg";
import { connect } from "react-redux";
import store from "../../redux/store";
import EllipseDelete from "../../images/Ellipse-delete.svg";
import DeleteIcon from "../../images/Vector.svg";
import {
  heroPressedTrue,
  heroPressedFalse,
  deleteHero
} from "../../redux/actions";

import uniqueId from "lodash/uniqueId";

class HeaderAddedHeroes extends React.Component {
  state = {
    heroes: {
      allIds: [],
      byIds: {}
    },
    showCloseButton: false,
    justTouchedFlag: false
  };
  constructor(props) {
    super(props);

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);

    store.subscribe(() => {
      let header = document.querySelector(".header-added-heroes");
      const headerText = document.querySelector(".header-added-heroes__call-to-action-text");
      const marvelIcon = document.querySelector(".footer-universe-selecting__marvel-universe");
      const dcIcon = document.querySelector(".footer-universe-selecting__dc-universe");
      const listField = document.querySelector(".find-hero-list");
      const list = document.querySelector(".find-hero-list__list");
      if( getComputedStyle(headerText).display === 'block' && store.getState().addedHeroes.allIds.length) {
        headerText.style.display = 'none';
      } else if (!store.getState().addedHeroes.allIds.length) {
        headerText.style.display = 'block';
      }

      this.setState({
        heroes: store.getState().addedHeroes
      });
    });
  }

  handleMove(el) {
    this.setState({ justTouchedFlag: false, showCloseButton: false });
    this.props.heroPressedFalse(el);
  }
  onTouchStart() {
    this.setState({ justTouchedFlag: true });
  }
  onTouchEnd(el) {
    if (this.state.justTouchedFlag) {
      this.setState({ showCloseButton: true });
      this.props.heroPressedTrue(el);
    } else {
      this.setState({ showCloseButton: false });
      this.props.heroPressedFalse(el);
    }
  }
  handleMouseOut(el) {
    this.setState({ showCloseButton: false });
    this.props.heroPressedFalse(el);
  }
  handleMouseOver(el) {
    this.setState({ showCloseButton: true });
    this.props.heroPressedTrue(el);
  }
  render() {
    return (
      <header className="header-added-heroes">
        <div className="heroes">
          <div className="shadow-last-scroll-hero" /> { console.log(' render \n')}
          {Object.keys(this.state.heroes["byIds"]).map(key => {
            console.log(' heroes : ', this.state.heroes["byIds"][key]);
            const el = this.state.heroes["byIds"][key].content;
            const { counter, isPressed } = this.state.heroes["byIds"][key];
            return (
              <a name={el.name} key={el.name} className="heroes__link">
                <div className="hero">
                  {
                    <img
                      className="hero__image"
                      onTouchStart={this.onTouchStart.bind(this, el)}
                      onTouchMove={this.handleMove.bind(this, el)}
                      onTouchEnd={this.onTouchEnd.bind(this, el)}
                      onMouseOver={this.handleMouseOver.bind(this, el)}
                      onMouseOut={this.handleMouseOut.bind(this, el)}
                      src={el.image}
                      alt=""
                      style={{
                        borderRadius: "8px",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%"
                      }}
                    />
                  }
                  {counter >= 2 && (
                    <React.Fragment>
                      <img
                        src={HeroCounter}
                        alt=""
                        className="hero__counter-icon"
                      />
                      {counter >= 10 && (
                        <div className="counter-text2">{counter}</div>
                      )}{" "}
                      {/* TODO // OPTIMIZE: */}
                      {counter < 10 && (
                        <div className="counter-text">{counter}</div>
                      )}
                    </React.Fragment>
                  )}
                  {isPressed && (
                    <div
                      id="delete"
                      onTouchEnd={this.props.deleteHero.bind(this, el)}
                    >
                      <img
                        src={DeleteIcon}
                        width="8px"
                        height="8px"
                        style={{
                          position: "absolute",
                          right: "4px",
                          bottom: "7px",
                          zIndex: "1"
                        }}
                        alt=""
                      />
                      <img
                        onTouchEnd={() => deleteHero(el)}
                        src={EllipseDelete}
                        alt=""
                        width="24"
                        style={{
                          position: "relative",
                          left: "4px",
                          bottom: "8px"
                        }}
                      />
                    </div>
                  )}
                </div>
              </a>
            );
          })}{" "}
          <div
            id="last_div"
            style={{ width: "38px", display: "inline-block" }}
          />{" "}
          {/* for extra space when scrolling to the last hero */}
          {/* <div className="hero" ref={this.props.focusEl}></div> */}
        </div>
        <div className="header-added-heroes__call-to-action-text">Выберите героя</div>
      </header>
    );
  }
}

export default connect(
  null,
  { heroPressedTrue, heroPressedFalse, deleteHero }
)(HeaderAddedHeroes);
