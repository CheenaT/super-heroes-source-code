import React from "react";
// import uniqueId from "lodash/uniqueId";
import HeroCounter from "../../images/HeroCounter.svg";
import { connect } from 'react-redux';
import store from '../../redux/store';

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
      let header = document.querySelector('.header-added-heroes');
const listField = document.querySelector('.find-hero-list');
const list = document.querySelector('.find-hero-list__list');
console.log(header.style.display);
// getComputedStyle(els[0], "").display === "none"
if ( getComputedStyle(header).display == 'none' ) {
  header.style.display = 'block';
  listField.style.height = '304px';
  list.style.height = '204px';
}
      console.log(' from subscribe : ', store.getState().addedHeroes, this.state.heroes)
      this.setState({
        heroes: store.getState().addedHeroes
      });
    });
  }

  handleMove() {
    console.log('moved');
    this.setState({ justTouchedFlag: false, showCloseButton: false })
  }
  onTouchStart() {
    console.log('started');
  	this.setState({ justTouchedFlag: true })
  }
  onTouchEnd() {
    console.log('ended');
    if ( this.state.justTouchedFlag ) {
      this.setState({ showCloseButton: true })
    }
    else{
      this.setState({ showCloseButton: false })
    }
  }
  handleMouseOut() {
    this.setState({ showCloseButton: false })
  }
  handleMouseOver() {
    this.setState({ showCloseButton: true })
  }
  render() { var that = this;
    return (
      <header className="header-added-heroes">
        <div className="shadow-last-scroll-hero" />
        { console.log(' from render : ', this.state.heroes)}
        <div className="heroes">
          {Object.keys(this.state.heroes['byIds']).map( (key) => {
            const el = this.state.heroes['byIds'][key].content;
            const counter = this.state.heroes['byIds'][key].counter;
            return (<a name={el.name} key={el.name} className="heroes__link">
              <div className="hero">
                {
                  <img className="hero__image"
                    onTouchStart={this.onTouchStart}
                    onTouchMove={this.handleMove}
                    onTouchEnd={this.onTouchEnd}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
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
                    { counter >= 10 && <div className="counter-text2">{counter}</div> } {/* TODO // OPTIMIZE: */}
                    { counter < 10 && <div className="counter-text">{counter}</div> }
                  </React.Fragment>
                )}
                { console.log(this.state.showCloseButton) }
                { this.state.showCloseButton && <div id="delete">sdffsd</div> }
              </div>
            </a>);
          })}
            {" "}
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

export default HeaderAddedHeroes;
