import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Showing from './Showing'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import movieReducers from '../reducers/movieReducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('Showing', () => {

  const store = createStore(movieReducers);

  const movies = [{title: "There's Something About Mary",year: "1998",rated: "R", runtime: 134},{title: "The Imitation Game", year: "2014", rated: "PG-13", runtime: 114},{title: "The Hateful Eight", year: "2015", rated: "R", runtime: 86}]

  const domElement = (child) => mount(
        <Provider store={store} >
          <StaticRouter location="/" context={{}}>
            {child}
          </StaticRouter>
        </Provider>
        )


    it('renders info about a movie', () => {
    const component = domElement(<Showing movies={movies} />);
    // console.log(component.html())
    expect(component.contains("There's Something About Mary")).toEqual(true);
    expect(component.contains("The Imitation Game")).toEqual(true);
  })

})

