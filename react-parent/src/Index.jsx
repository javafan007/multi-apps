import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import List from './List';


export default function Index() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/product" component={List}></Route>
        <Redirect to="/product" />
      </Switch>
    </BrowserRouter>
  )
}