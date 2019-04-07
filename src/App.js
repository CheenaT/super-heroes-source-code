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
    this.onChangeUniverse = this.onChangeUniverse.bind(this);
    this.onFilterHandler = this.onFilterHandler.bind(this);
  }

  componentDidMount() {
    setTimeout( () => document.body.style.removeProperty('zoom'), 400); // почему-то начал устанавливатья zoom = '0.9' у body после загрузки
    var link = document.querySelector("link[rel*='icon']");
    console.log(link);
    link.href = '/favicons/' + Math.floor(Math.random() * 10 + 1) + 'favicon.ico';
  }


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
