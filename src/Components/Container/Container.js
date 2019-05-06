import React from 'react';
import Card from '../Card/Card.js'
import NavBar from '../NavBar/NavBar.js'

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

export default Container;