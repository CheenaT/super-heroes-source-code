import React from "react";
// import uniqueId from "lodash/uniqueId";
import HeroCounter from "../../images/HeroCounter.svg";
import { connect } from "react-redux";
import store from "../../redux/store";
import EllipseDelete from "../../images/Ellipse-delete.svg";
import DeleteIcon from "../../images/Vector.svg";
import { heroPressedTrue, heroPressedFalse, deleteHero } from '../../redux/actions';

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
      // When state will be updated(in our case, when items will be fetched),
      // we will update local component state and force component to rerender
      // with new data.
      let header = document.querySelector(".header-added-heroes");
      const listField = document.querySelector(".find-hero-list");
      const list = document.querySelector(".find-hero-list__list");
      console.log(header.style.display);
      // getComputedStyle(els[0], "").display === "none"
      if (
        getComputedStyle(header).display == "none" &&
        store.getState().addedHeroes.allIds.length
      ) {
        header.style.display = "block";
        listField.style.height = "304px";
        list.style.height = "204px";
      }
      console.log(
        " from subscribe : ",
        store.getState().addedHeroes,
        this.state.heroes
      );
      this.setState({
        heroes: store.getState().addedHeroes
      });
    });
  }

  handleMove(el) {
    console.log("moved");
    this.setState({ justTouchedFlag: false, showCloseButton: false });
    this.props.heroPressedFalse(el);
  }
  onTouchStart() {
    console.log("started");
    this.setState({ justTouchedFlag: true });
  }
  onTouchEnd(el) {
    console.log("ended el : ", el);
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
        {console.log(" from render : ", this.state.heroes)}
        <div className="heroes">
          <div className="shadow-last-scroll-hero" />
          {Object.keys(this.state.heroes["byIds"]).map(key => {
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
                  {console.log(this.state.showCloseButton)}
                  { isPressed && (
                    <div id="delete" onTouchEnd={this.props.deleteHero.bind(this, el)}>
                      <img
                        src={DeleteIcon}
                        width='8px'
                        height='8px'
                        style={{
                          position: "absolute",
                          right: "4px",
                          bottom: "7px",
                          zIndex: '1'
                        }}
                        alt=""
                      />
                      <img onTouchEnd={() => deleteHero(el)}
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
      </header>
    );
  }
}

export default connect(null, { heroPressedTrue, heroPressedFalse, deleteHero })(HeaderAddedHeroes);
