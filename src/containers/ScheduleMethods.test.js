import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Schedule } from './Schedule'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import movieReducers from '../reducers/movieReducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('ScheduleMethods', () => {

  const store = createStore(movieReducers);

  const movies = [{title: "There's Something About Mary",year: "1998",rated: "R", runtime: 134},{title: "The Imitation Game", year: "2014", rated: "PG-13", runtime: 114},{title: "The Hateful Eight", year: "2015", rated: "R", runtime: 86}];

  const hours = {weekday: {start: 1100, end: 2300},
                weekend: {start: 1030, end: 2400}};

  const schedule = new Schedule;

  const weekdayHours = [{start: 675, end: 824 },
                      { start: 845, end: 994 },
                      { start: 1015, end: 1164 },
                      { start: 1185, end: 1334 } ]


    it('takes in runtime and schedule and output an array of showtimes', () => {
      let showtimesWeekday = schedule.getHourArray(134, hours.weekday);
      expect(showtimesWeekday).toEqual(
        [{start: 675, end: 824 },
        { start: 845, end: 994 },
        { start: 1015, end: 1164 },
        { start: 1185, end: 1334 } ]);

      let showtimesWeekend = schedule.getHourArray(134, hours.weekend);
      expect(showtimesWeekend).toEqual(
        [ { start: 645, end: 794 },
        { start: 815, end: 964 },
        { start: 985, end: 1134 },
        { start: 1155, end: 1304 } ]);

    })


    it('It take in an array of start and end times in minute and formats it to a 12hr clock ', () => { 
      let formattedWeekdayHours = schedule.formatTime(weekdayHours);
      expect(formattedWeekdayHours).toEqual(
        [ { start: '11:15 AM', end: '1:44 PM' },
        { start: '2:05 PM', end: '4:34 PM' },
        { start: '4:55 PM', end: '7:24 PM' },
        { start: '7:45 PM', end: '10:14 PM' } ])

    })



})


