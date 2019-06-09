import React from 'react';
import { fetchCall } from './fetchCall';

describe('fetchCall', () => {
  let mockData;
  const URL = 'https://swapi.co/api/';

  beforeEach(() => {
    mockData = {name: "Darth Vader"}
    fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, status: 200,
      json: () => Promise.resolve(mockData),
    }));
  })

  it('if fetch fails, error displays', async() => {
    const URL = 'https://swapi.co/api/';
    fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: false, status: 500}));
    try {
      await fetchCall(URL)
    } catch(error) {
      expect(error.message).toBe('Error fetching data')
    }
  })
  
  it('takes in the expected URL', () => {
    fetchCall(URL)
    expect(fetch).toBeCalledWith(URL)
  })


  it('fetch call returns expected data', async () => {
    const result = await fetchCall(URL)
    expect(result).toEqual(mockData)
  })
})
