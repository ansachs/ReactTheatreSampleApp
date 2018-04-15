import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { AddMovie } from './AddMovie'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import movieReducers from '../reducers/movieReducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('AddMovieMethods', () => {

  const form = new AddMovie;

  const invalidTitles = {title1: "", title2: "abcdefg hijklmn opqrst uvwxyz", title3: null};
  const validTitle = "I am a real movie";

  const currentDate = new Date();
  const invalidYears = {year1: null,year2: "abc",year3: 1899, year4:currentDate.getFullYear() + 1};
  const validYear = 1994;

  const invalidRuntimes = {rt1: "", rt2: "abc", rt3: -5, rt4: 601};
  const validRuntime = 300;

  const errorArray = [];

  it('validates a title', () => {
    expect(form.validateTitle(invalidTitles.title1, errorArray)).toEqual(true);
    expect(form.validateTitle(invalidTitles.title2, errorArray)).toEqual(true);
    expect(form.validateTitle(invalidTitles.title3, errorArray)).toEqual(true);
    expect(form.validateTitle(validTitle, errorArray)).toEqual(false);
  })


  it('validates a year', () => {
    expect(form.validateYear(invalidYears.year1, errorArray)).toEqual(true);
    expect(form.validateYear(invalidYears.year2, errorArray)).toEqual(true);
    expect(form.validateYear(invalidYears.year3, errorArray)).toEqual(true);
    expect(form.validateYear(invalidYears.year4, errorArray)).toEqual(true);
    expect(form.validateYear(validYear, errorArray)).toEqual(false);
  })

  it('validates a runtime', () => {
    expect(form.validateRuntime(invalidRuntimes.rt1, errorArray)).toEqual(true);
    expect(form.validateRuntime(invalidRuntimes.rt2, errorArray)).toEqual(true);
    expect(form.validateRuntime(invalidRuntimes.rt3, errorArray)).toEqual(true);
    expect(form.validateRuntime(invalidRuntimes.rt4, errorArray)).toEqual(true);
    expect(form.validateRuntime(validRuntime, errorArray)).toEqual(false);

  })

  it('validates a runtime', () => { 

  })




})