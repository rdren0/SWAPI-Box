import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { shallow } from 'enzyme';



describe(NavBar, () => {
  let wrapper;
  let mockFilterType;
  let mockPeopleEvent;
  let mockPlanetEvent;
  let mockVehicleEvent;


 beforeEach(() => {
    mockFilterType = jest.fn()
    mockPeopleEvent = {target:{innerText:'people'}}
    mockPlanetEvent = {target:{innerText:'planets'}}
    mockVehicleEvent = {target:{innerText:'vehicles'}}


    wrapper = shallow(<NavBar filterByType={mockFilterType}/>)
  })

  it('should match snapshot with all correct data passed through', () => {
    const wrapper = shallow(<NavBar/>)
    expect(wrapper).toMatchSnapshot();
  })
  it('should call filterType with correct params when clicked', () => {
    wrapper.find('#people').simulate('click', mockPeopleEvent);
    expect(mockFilterType).toHaveBeenCalledWith('people')
  });
  it('should call filterType with correct params when clicked', () => {
    wrapper.find('#planets').simulate('click', mockPlanetEvent);
    expect(mockFilterType).toHaveBeenCalledWith('planets')
  });
  it('should call filterType with correct params when clicked', () => {
    wrapper.find('#vehicles').simulate('click',mockVehicleEvent);
    expect(mockFilterType).toHaveBeenCalledWith('vehicles')
  });

})

