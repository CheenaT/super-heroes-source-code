import React from "react";
// import uniqueId from "lodash/uniqueId";
import HeroCounter from "../../images/HeroCounter.svg";

class HeaderAddedHeroes extends React.Component {
  state = {
    heroes: [1, 2, 3, 4],
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
        <div className="heroes">
          {this.props.addedHeroes.map( (el) => {
            return (<a name={el.link} key={el.name} className="heroes__link">
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
                {el.counter >= 2 && (
                  <React.Fragment>
                    <img
                      src={HeroCounter}
                      alt=""
                      className="hero__counter-icon"
                    />
                    { el.counter >= 10 && <div className="counter-text2">{el.counter}</div> } {/* TODO // OPTIMIZE: */}
                    { el.counter < 10 && <div className="counter-text">{el.counter}</div> }
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
