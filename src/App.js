import React, { Component } from "react";
import Footer from "./Components/Footer";
import FindHeroList from "./Components/Find-Hero-List";
import HeaderAddedHeroes from "./Components/Header-Added-Heroes";

class App extends Component {

  componentDidMount() {
    setTimeout(() => document.body.style.removeProperty("zoom"), 400); // почему-то начал устанавливатья zoom = '0.9' у body после загрузки
    var link = document.querySelector("link[rel*='icon']");
    link.href =
      "/favicons/" + Math.floor(Math.random() * 10 + 1) + "favicon.ico";
  }
  render() {
    return (
      <div className="main">
        <HeaderAddedHeroes />
        <FindHeroList />
        <Footer />
      </div>
    );
  }
}

export default App;
