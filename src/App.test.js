import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';


describe('App', () =>{
  const fetchSpy = jest.spyOn(global, 'fetch');
  const mockFunction = jest.fn()
  let wrapper;
  let URL;
  let type;
  let random;
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
    URL = "https://swapi.co/api/";
    wrapper.instance().componentDidMount();
    expect(window.fetch).toHaveBeenCalledWith(URL)
  })

  it('should call fetch with the correct url in gatherTypes', () =>{
    URL = "https://swapi.co/api/planets";
    wrapper.instance().gatherTypes(URL);
    expect(window.fetch).toHaveBeenCalledWith(URL)
  })

  it.skip('should call randomMovie on componentDidMount', () =>{
    wrapper.instance().componentDidMount();
    expect(randomMovie).toHaveBeenCalled()
  })

  it.skip('should change state to the correct type in filterByType', () =>{
    type = "people";
    wrapper.instance().filterByType(type);
    expect(wrapper.state().currentCategory).to.equal("people");
  })

  it.skip('should call gatherTypes with correct URL in filterByType', () =>{
    type = "people";
    wrapper.instance().filterByType(type);
    expect(filterByType).toHaveBeenCalledWith(`https://swapi.co/api/${type}/`)
  })

  it.skip('should call return a random movie', () =>{
    random = 1;
    wrapper.instance().randomMovie("https://swapi.co/api/films")
    expect(wrapper.state().randomMovie).to.equal({"title": "Attack of the Clones",
      "episode_id": 2,
      "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "release_date": "2002-05-16",
      "characters": [
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/6/",
        "https://swapi.co/api/people/7/",
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/11/",
        "https://swapi.co/api/people/20/",
        "https://swapi.co/api/people/21/",
        "https://swapi.co/api/people/22/",
        "https://swapi.co/api/people/33/",
        "https://swapi.co/api/people/36/",
        "https://swapi.co/api/people/40/",
        "https://swapi.co/api/people/43/",
        "https://swapi.co/api/people/46/",
        "https://swapi.co/api/people/51/",
        "https://swapi.co/api/people/52/",
        "https://swapi.co/api/people/53/",
        "https://swapi.co/api/people/58/",
        "https://swapi.co/api/people/59/",
        "https://swapi.co/api/people/60/",
        "https://swapi.co/api/people/61/",
        "https://swapi.co/api/people/62/",
        "https://swapi.co/api/people/63/",
        "https://swapi.co/api/people/64/",
        "https://swapi.co/api/people/65/",
        "https://swapi.co/api/people/66/",
        "https://swapi.co/api/people/67/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/69/",
        "https://swapi.co/api/people/70/",
        "https://swapi.co/api/people/71/",
        "https://swapi.co/api/people/72/",
        "https://swapi.co/api/people/73/",
        "https://swapi.co/api/people/74/",
        "https://swapi.co/api/people/75/",
        "https://swapi.co/api/people/76/",
        "https://swapi.co/api/people/77/",
        "https://swapi.co/api/people/78/",
        "https://swapi.co/api/people/82/",
        "https://swapi.co/api/people/35/"
      ],
      "planets": [
        "https://swapi.co/api/planets/8/",
        "https://swapi.co/api/planets/9/",
        "https://swapi.co/api/planets/10/",
        "https://swapi.co/api/planets/11/",
        "https://swapi.co/api/planets/1/"
      ],
      "starships": [
        "https://swapi.co/api/starships/21/",
        "https://swapi.co/api/starships/39/",
        "https://swapi.co/api/starships/43/",
        "https://swapi.co/api/starships/47/",
        "https://swapi.co/api/starships/48/",
        "https://swapi.co/api/starships/49/",
        "https://swapi.co/api/starships/32/",
        "https://swapi.co/api/starships/52/",
        "https://swapi.co/api/starships/58/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/4/",
        "https://swapi.co/api/vehicles/44/",
        "https://swapi.co/api/vehicles/45/",
        "https://swapi.co/api/vehicles/46/",
        "https://swapi.co/api/vehicles/50/",
        "https://swapi.co/api/vehicles/51/",
        "https://swapi.co/api/vehicles/53/",
        "https://swapi.co/api/vehicles/54/",
        "https://swapi.co/api/vehicles/55/",
        "https://swapi.co/api/vehicles/56/",
        "https://swapi.co/api/vehicles/57/"
      ],
      "species": [
        "https://swapi.co/api/species/32/",
        "https://swapi.co/api/species/33/",
        "https://swapi.co/api/species/2/",
        "https://swapi.co/api/species/35/",
        "https://swapi.co/api/species/6/",
        "https://swapi.co/api/species/1/",
        "https://swapi.co/api/species/12/",
        "https://swapi.co/api/species/34/",
        "https://swapi.co/api/species/13/",
        "https://swapi.co/api/species/15/",
        "https://swapi.co/api/species/28/",
        "https://swapi.co/api/species/29/",
        "https://swapi.co/api/species/30/",
        "https://swapi.co/api/species/31/"
      ],
      "created": "2014-12-20T10:57:57.886000Z",
      "edited": "2015-04-11T09:45:01.623982Z",
      "url": "https://swapi.co/api/films/5/"
    });
  })
})

