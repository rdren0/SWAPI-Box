import React from 'react';

const Header = ({filterByType}) => {
  const filterType = (e) =>{
    filterByType(e.target.innerText)

  }
  return(
    <div>
      <button id="people" onClick={filterType}> People </button>
      <button id="planets" onClick={filterType}> Planets </button>
      <button id="vehicles" onClick={filterType}> Vehicles </button>
    </div>)
}

export default Header


 
  