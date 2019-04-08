import React from "react";
import { ReactComponent as DCLogo } from "../../images/dc-logo.svg"; // ReactComponent cause this error: "The above error occurred in the </static/media/dc-logo.b0667703.svg> component"
import MarvelIcon from "../../images/Marvel.svg"; // Error log in folder error logs
import { connect } from 'react-redux';
import { setUniverse } from '../../redux/actions';

const Footer = ({ currentUniverse, setUniverse }) => {
    return (
      <footer className="footer-universe-selecting">
        <DCLogo
          className="footer-universe-selecting__dc-universe"
          onTouchStart={() => {setUniverse('dc')}} alt="DC icon" />{" "}
        {/* replace to img tag */}
        <img
          className="footer-universe-selecting__marvel-universe"
          src={MarvelIcon}
          alt="Marvel icon"
          onTouchStart={() => {setUniverse('marvel')}}
        />
      </footer>
    );
};

const mapStateToProps = state => {
  return { currentUniverse: state.universe };
};

export default connect(
  mapStateToProps,
  { setUniverse }
)(Footer);
