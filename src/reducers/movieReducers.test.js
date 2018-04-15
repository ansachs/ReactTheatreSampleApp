import movieReducers from './movieReducers'
import * as types from '../actions/MovieActions'

describe('movie reducer', () => {
  it('should return the initial state', () => {
    expect(movieReducers(undefined, {})).toEqual(
      {
        movies: [{title: "There's Something About Mary",year: "1998",rated: "R", runtime: 134},{title: "The Imitation Game", year: "2014", rated: "PG-13", runtime: 114},{title: "The Hateful Eight", year: "2015", rated: "R", runtime: 86}],
        theatreHours: {weekday: {start: 1100, end: 2300},
                weekend: {start: 1030, end: 2400}}
      })
  })

  it('should handle ADD_MOVIE', () => {
    expect( movieReducers({movies:[]}, {
        type: types.addMovie().type,
        movie: {title: "A Random Year",year: 1980,rated: "R",runtime: 123}
      })
    ).toEqual({"movies": [{"rated": "R", "runtime": 123, "title": "A Random Year", "year": 1980}]})
  })

  it('should handle REMOVE_MOVIE', () => {
    expect( movieReducers({movies: [{title: "A Random Year",year: 1980,rated: "R",runtime: 123}]}, {
        type: types.removeMovie().type,
        id: 0
      })
    ).toEqual({"movies": []})
  })

  
})