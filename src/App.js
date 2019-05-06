import React, {Component} from 'react';
import Header from './Components/Header/Header.js';
import Container from './Components/Container/Container.js';
import TextScroll from './Components/TextScroll/TextScroll.js';
import { fetchCall } from './fetchcall';
import PropTypes from 'prop-types';
import './App.css';



class App extends Component{
  constructor(){
    super()
    this.state = {
      cardData: [],
      currentCategory: '',
      randomMovie: {},
      favorites: []
    }
  }

componentDidMount = () => {
  const url = "https://swapi.co/api/";
  fetchCall(url).then(results => this.gatherTypes(results.people))
  this.randomMovie("https://swapi.co/api/films");
   const favorited = JSON.parse(localStorage.getItem('Favorites')) || [];
      this.setState({
        favorites: favorited,
      });
}


gatherTypes = (results) => {
  fetchCall(results).then(results => this.setState({cardData: results.results}))
}


filterByType = (type) => {
  type = type.toLowerCase()
  const URL = `https://swapi.co/api/${type}/`
  this.setState({currentCategory: type})
  this.gatherTypes(URL);
}


randomMovie = (url) =>{
  const random = Math.floor(Math.random() * Math.floor(7));
  fetchCall(url).then(results => this.setState({randomMovie: results.results[random]}))
}

addFavorites = (ID, status) => {
    let newState;
    if (this.state.favorites.includes(ID) && status === true) {
      newState = this.state.favorites.filter(card => card !== ID);
    } else{
      newState = [...this.state.favorites, ID];
    this.setState({
      favorites : newState
    }, () => {
      this.saveToStorage();
    });
    }
  }

  saveToStorage = () => {
    localStorage.setItem('Favorites', JSON.stringify(this.state.favorites));
  }


  render(){
    return (
      <div className="App">
      <Header className="header"/>
      <Container 
      category = {this.state.currentCategory} 
      cards = {this.state.cardData} 
      filterByType = {this.filterByType}
      favorites = {this.state.favorites}
      addFavorites = {this.addFavorites}
/>
      <TextScroll crawl={this.state.randomMovie}/>
    </div>
    );
  }
}

App.propTypes = {
  cardData: PropTypes.array,
  randomMovie: PropTypes.func,
  currentCategory: PropTypes.string,
 
}

export default App;
