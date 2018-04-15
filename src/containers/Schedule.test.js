import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Schedule from './Schedule'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import movieReducers from '../reducers/movieReducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('Schedule', () => {

  const store = createStore(movieReducers);

  const movies = [{title: "There's Something About Mary",year: "1998",rated: "R", runtime: 134},{title: "The Imitation Game", year: "2014", rated: "PG-13", runtime: 114},{title: "The Hateful Eight", year: "2015", rated: "R", runtime: 86}]

  const hours = {weekday: {start: 1100, end: 2300},
                weekend: {start: 1030, end: 2400}}

  const domElement = (child) => mount(
        <Provider store={store} >
          <StaticRouter location="/movie/:movieID" context={{movieID: 1}}>
            {child}
          </StaticRouter>
        </Provider>
        )




    it('renders movie times for a movie with runtime of 114 minutes', () => {
    const component = domElement(<Schedule match={{params: {movieID: 1}}}/>);
    expect(component.contains(<h2>Weekday Hours</h2>)).toEqual(true);
    expect(component.contains(<h2>Weekend Hours</h2>)).toEqual(true);
  })



})


