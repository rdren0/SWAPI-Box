import React from 'react';
import Card from '../Card/Card.js';
import NavBar from '../NavBar/NavBar.js';
import PropTypes from 'prop-types';


const Container = (props) => {
  const cards = props.cards.map(card =>{
      return <Card {...card} key={card.id} category = {props.category} />
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