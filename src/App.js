import React, { Component } from "react";
import Footer from "./Components/Footer";
import FindHeroList from "./Components/Find-Hero-List";
import FindHeroListDC from "./Components/Find-Hero-List-DC";
import FindHeroListMarvel from "./Components/Find-Hero-List-Marvel";
import HeaderAddedHeroes from "./Components/Header-Added-Heroes";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    setTimeout(() => document.body.style.removeProperty("zoom"), 400); // почему-то начал устанавливатья zoom = '0.9' у body после загрузки
    var link = document.querySelector("link[rel*='icon']");
    link.href =
      "/favicons/" + Math.floor(Math.random() * 10 + 1) + "favicon.ico";
  }
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <HeaderAddedHeroes />
          <Switch>
            <Route exact path="/" component={FindHeroList} />
            <Route path="/dc" component={FindHeroListDC} />
            <Route path="/marvel" component={FindHeroListMarvel} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
