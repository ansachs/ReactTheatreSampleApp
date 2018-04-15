import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Schedule from '../containers/Schedule'
import MovieList from '../containers/MovieList'
import Nav from '../components/Nav'

const Routes = ({ store }) => {
  return (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movie/:movieID" component={Schedule} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)}


export default Routes