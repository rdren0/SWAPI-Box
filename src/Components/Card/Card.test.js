import React, { Component } from 'react';
import Card from './Card.js';
import { shallow } from 'enzyme';



describe(Card, () => {
  let category;
  let wrapper;
  let homeworld;
  const fetchSpy = jest.spyOn(global, 'fetch');


  beforeEach(() =>{
    wrapper = shallow(<Card/>)

  })
  it('should match snapshot with all correct data passed through', () => {
    category="people"
    expect(wrapper).toMatchSnapshot();
  })
  it('should match snapshot with all correct data passed through', () => {
    category="planets"
    expect(wrapper).toMatchSnapshot();
  })
  it('should match snapshot with all correct data passed through', () => {
    category="vehicles"
    expect(wrapper).toMatchSnapshot();
  })
  it('fetch the appropriate homeworld', () => {
    homeworld= "https://swapi.co/api/planets/1/"
    wrapper = shallow(<Card homeworld={homeworld}/>)
    wrapper.instance().componentDidMount();
    expect(window.fetch).toHaveBeenCalledWith(homeworld)
    
  })
})


