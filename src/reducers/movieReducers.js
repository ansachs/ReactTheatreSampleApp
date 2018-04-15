const initialState = {
  movies: [{title: "There's Something About Mary",year: "1998",rated: "R", runtime: 134},{title: "The Imitation Game", year: "2014", rated: "PG-13", runtime: 114},{title: "The Hateful Eight", year: "2015", rated: "R", runtime: 86}],
  theatreHours: {weekday: {start: 1100, end: 2300},
                weekend: {start: 1030, end: 2400}}
}

const movieReducers = (prevState = initialState, action) => {
  const newState = {...prevState};
    switch(action.type) {
    case 'ADD_MOVIE':
      newState.movies = [...prevState.movies, action.movie]
      return newState;
    case 'REMOVE_MOVIE':
      newState.movies = action.id === 0 ? prevState.movies.slice(1) : prevState.movies.slice(0,action.id).concat(prevState.movies.slice(action.id + 1))
      return newState;
    default:
      return prevState;
  }
}

export default movieReducers;