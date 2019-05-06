import React, { Component } from 'react';
import Header from './Header.js';
import { shallow } from 'enzyme';



describe(Header, () => {
  it('should match snapshot with all correct data passed through', () => {
    const wrapper = shallow(
      <Header/>)
    expect(wrapper).toMatchSnapshot();
  })
})