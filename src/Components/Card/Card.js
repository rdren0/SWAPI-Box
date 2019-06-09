import React, {Component} from 'react';
import { fetchCall } from './../../FetchCall/fetchcall.js';
import PropTypes from 'prop-types';


class Card extends Component{
  constructor(props){
    super()
    this.state= {
      homeworld: {}}
    }

  componentDidMount = () => {
    if(this.props.homeworld){
      fetchCall(this.props.homeworld).then(result => this.setState({homeworld: result}))
    }
  }

  checkStatus = (e) =>{
      if(!this.props.favorites.includes(this.props.name)){
        this.setState({status:true})
        this.props.addFavorites(this.props.name, this.props.favoriteStatus)
      }
    }

  render(){
    let button;
    this.props.status 
      ?button = <button onClick={this.checkStatus} className="favorited">Favorite</button>
      :button = <button onClick={this.checkStatus} className="notFavorited">Favorite</button>;

    return(
      <div className="card">
      <h3>{this.props.name}</h3>
      <hr/>
      {this.props.terrain && <h6>Terrain: {this.props.terrain}</h6>}
      {this.props.population && <h6>Population: {this.props.population}</h6>}
      {this.props.climate && <h6> Climate: {this.props.climate}</h6>}         
      {this.props.model && <h6>Model: {this.props.model}</h6>}
      {this.props.vehicle_class && <h6>Class: {this.props.vehicle_class}</h6>}
      {this.props.passengers && <h6># of Passengers: {this.props.passengers}</h6>}
      {this.props.homeworld && <h6>Homeworld: {this.state.homeworld.name}</h6>}
      {this.props.homeworld && <h6>Population: {this.state.homeworld.population}</h6>}
      {this.props.homeworld && <h6> Species: {this.state.homeworld.species}</h6>}
      {button}
      </div>)
    }
  }
Card.propTypes = {
  homeworld: PropTypes.string,
}
// <h4> Residents: {this.props.residents}</h4>

export default Card;