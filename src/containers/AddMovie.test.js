import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { AddMovie } from './AddMovie'
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

  


  const formWithErrors = {
      errors: {title: true,year: false,rated: false, runtime:false },
      errorArray: ["Title must be > 0 characters and less than 20"],
      title: "",
      rated: null,
      year: "",
      runtime: ""
    }

  const validForm = {errors: {title: false ,year: false,rated: false,runtime: false },
      errorArray: [],
      title: "I am a Movie",
      rated: 'PG',
      year: 1990,
      runtime: 200
    }

  

    it('When handleSubmit is called it will populate the errors object and ErrorArray', () => {
      const wrapper = mount(<AddMovie />)

      wrapper.setState({title: "I am a Movie"}, ()=>{
        wrapper.instance().handleSubmit({preventDefault: ()=>{}});
        })

      expect(wrapper.state().title).toEqual("I am a Movie");
      expect(wrapper.state().errorArray.length).toEqual(3);
      expect(wrapper.state().errors.title).toEqual(false);

    })

    it('handleSubmit will only call addMovie for a valid movie', () => {

      const props = {
        addMovie: jest.fn()
      }

      const wrapper = mount(<AddMovie {...props}/>)

      const addMovieAndResetSpy = jest.spyOn(wrapper.instance(), 'addMovieAndReset');
      wrapper.update();

      wrapper.setState({...validForm}, ()=>{
        wrapper.instance().handleSubmit({preventDefault: ()=>{}});
        
        })

      expect(addMovieAndResetSpy).toHaveBeenCalled()
      
      

    })

    it('WhenAddMovieAndReset is called, will call dispatch addMovie with movie object', () => {
      const props = {
        addMovie: jest.fn()
      }

      const wrapper = mount(<AddMovie {...props}/>)

      wrapper.setState({...validForm},()=>{
        wrapper.instance().addMovieAndReset();
      })

      expect(props.addMovie.mock.calls.length).toBe(1)
      expect(props.addMovie.mock.calls[0]).toEqual(
        [{title: "I am a Movie", year: 1990, rated: "PG", runtime: 200}])
    })





})


