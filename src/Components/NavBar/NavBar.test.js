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
  it.skip('should call filterType with correct params when clicked', () => {
    wrapper.find('#people').simulate('click');
    console.log(mockEvent)
    expect(mockFilterType).toHaveBeenCalledWith(mockPeopleEvent)
  });
  it.skip('should call filterType with correct params when clicked', () => {
    wrapper.find('#planets').simulate('click');
    expect(mockFilterType).toHaveBeenCalledWith(mockPlanetEvent)
  });
  it.skip('should call filterType with correct params when clicked', () => {
    wrapper.find('#vehicles').simulate('click');
    expect(mockFilterType).toHaveBeenCalledWith(mockVehicleEvent)
  });

})

