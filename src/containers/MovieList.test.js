import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import MovieList from './MovieList'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import movieReducers from '../reducers/movieReducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('MovieList', () => {

  const store = createStore(movieReducers);

  const movies = [{title: "There's Something About Mary",year: "1998",rated: "R", runtime: 134},{title: "The Imitation Game", year: "2014", rated: "PG-13", runtime: 114},{title: "The Hateful Eight", year: "2015", rated: "R", runtime: 86}]

  const domElement = (child) => mount(
        <Provider store={store} >
          <StaticRouter location="/movie/:movieID" context={{movieID: 1}}>
            {child}
          </StaticRouter>
        </Provider>
        )


    it('renders a form to add movies and the showing component', () => {
    const component = domElement(<MovieList movies={movies} />);
    expect(component.contains(<h2> Add a Movie </h2>)).toEqual(true);
  })

})


