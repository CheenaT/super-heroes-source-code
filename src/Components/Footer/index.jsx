import React from "react";
import { ReactComponent as DCLogo } from "../../images/dc-logo.svg"; // ReactComponent cause this error: "The above error occurred in the </static/media/dc-logo.b0667703.svg> component"
import MarvelIcon from "../../images/Marvel.svg"; // Error log in folder error logs

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-universe-selecting">
        <DCLogo
          className="footer-universe-selecting__dc-universe"
          onTouchStart={this.props.onChangeUniverse('dc')} />{" "}
        {/* replace to img tag */}
        <img
          className="footer-universe-selecting__marvel-universe"
          src={MarvelIcon}
          alt=""
          onTouchStart={this.props.onChangeUniverse('marvel')}
        />
      </footer>
    );
  }
}

export default Footer;
