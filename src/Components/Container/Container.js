import React from 'react';
import Card from '../Card/Card.js';
import NavBar from '../NavBar/NavBar.js';
import PropTypes from 'prop-types';


const Container = (props) => {
  let favoriteStatus;
  const cards = props.cards.map(card =>{
    if(props.favorites.includes(card.name)){
            favoriteStatus =true;
          }else{
            favoriteStatus =false; 
          }
      return <Card {...card} 
      key={card.name} 
      category = {props.category} 
      status={favoriteStatus}
      favorites = {props.favorites}
      addFavorites = {props.addFavorites}/>
    })
  return(
    <div>
    <NavBar filterByType = {props.filterByType}/>
    <div className="card-area">
      {cards}
      </div>
    </div>
    )

}

Container.propTypes = {
  props: PropTypes.array,
 
}

export default Container;