import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';


describe('App', () =>{
  const fetchSpy = jest.spyOn(global, 'fetch');
  const mockFunction = jest.fn()
  let wrapper;
  let URL;
  beforeEach(()=>{
    wrapper = shallow(<App 
      randomMovie={mockFunction} 
      filterByType={mockFunction}
      />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot with all correct data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call fetch with the correct url', () =>{
    URL = "https://swapi.co/api/films";
    wrapper.instance().componentDidMount();
    expect(window.fetch).toHaveBeenCalledWith(URL)
  })

  it('should call fetch with the correct url in gatherTypes', () =>{
    URL = "https://swapi.co/api/planets";
    wrapper.instance().gatherTypes(URL);
    expect(window.fetch).toHaveBeenCalledWith(URL)
  })

  it('should change state to the correct type in filterByType', () =>{
    let type = "people";
    wrapper.instance().filterByType(type);
    expect(wrapper.state('currentCategory')).toEqual("people");
  })

  it('should call return a random movie', () =>{
    wrapper.instance().randomMovie("https://swapi.co/api/films")
    expect(wrapper.state().randomMovie).toEqual({})
  })

  it.skip('should call gatherTypes with correct URL in filterByType', () =>{
    let type = "planets";
    wrapper.instance().filterByType(type);
    expect(filterByType).toHaveBeenCalledWith(`https://swapi.co/api/${type}/`)
  })

  it.skip('should call randomMovie on componentDidMount', () =>{
    wrapper.instance().componentDidMount();
    expect(randomMovie).toHaveBeenCalled()
  })

})

