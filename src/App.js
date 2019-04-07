import React, { Component } from 'react';
// import './style.scss';
import Footer from './Components/Footer';
import FindHeroList from './Components/Find-Hero-List';
import HeaderAddedHeroes from './Components/Header-Added-Heroes';

class App extends Component {
  state = {
    addedHeroes: [],
    heroCounters: [],
    selectedUnierse: 'dc',
    filterValue: ''
  };
  constructor(props) {
    super(props);
    this.focusEl = React.createRef();
    this.addHeroHandler = this.addHeroHandler.bind(this);
    this.onChangeUniverse = this.onChangeUniverse.bind(this);
    this.onFilterHandler = this.onFilterHandler.bind(this);
  }

  componentDidMount() {
    setTimeout( () => document.body.style.removeProperty('zoom'), 400); // почему-то начал устанавливатья zoom = '0.9' у body после загрузки
    var link = document.querySelector("link[rel*='icon']");
    console.log(link);
    link.href = '/favicons/' + Math.floor(Math.random() * 10 + 1) + 'favicon.ico';
  }

  addHeroHandler = el => () =>  {
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
    console.log(el, ' before : ', this.state.addedHeroes.indexOf(el) );
    if ( this.state.addedHeroes.indexOf(el) === -1 ) {
      el.counter = 1; console.log(' el.counter ', el);
      el.link = el.name;
      this.setState({addedHeroes: [el, ...this.state.addedHeroes]});
    }
    else {
      let updateAddedHeroes = this.state.addedHeroes;
      updateAddedHeroes[this.state.addedHeroes.indexOf(el)].counter++;
      this.setState({addedHeroes: updateAddedHeroes})

    }
    console.log(el, ' after : ', this.state.addedHeroes);
    // this.focusEl.current.focus();
  };
  onChangeUniverse = el => () => {
    this.setState({selectedUnierse: el, filterValue: ''})
  }
  onFilterHandler(e) {
    const { value, name } = e.target;
    console.log(' value from onFilterHandler in App : ', value);
    this.setState({filterValue: value});
    console.log(this.state.filterValue);
  }
  render() {
    return (
        <div className="main"> {console.log('this.state.filterValue', this.state.filterValue)}
          <HeaderAddedHeroes addedHeroes={this.state.addedHeroes} focusEl={this.focusEl} />

          <FindHeroList filterValue={this.state.filterValue} onAddHero={this.addHeroHandler} universe={this.state.selectedUnierse} filter={this.onFilterHandler} />

          <Footer onChangeUniverse={this.onChangeUniverse}/>

        </div>
    );
  }
}

export default App;
