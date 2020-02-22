import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Supplier from './Supplier';



const Router = ({ isHashRoute, children }) => {
  if (isHashRoute) {
    return (
      <HashRouter>
        {children}
      </HashRouter>
    );
  }
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
};

ReactDOM.render(
  <Router isHashRoute={true}>
    <Switch>
      <Route path="/supplier" component={Supplier}></Route>
      {/*<Redirect to="/supplier" />*/}
    </Switch>
  </Router>,
  document.getElementById('childApp')
);