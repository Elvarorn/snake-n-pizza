import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import Menu from './components/Menu/Menu';
import Offers from './components/Offers/Offers';
import Cart from './components/Cart/Cart';
import PizzaDetail from './components/PizzaDetail/PizzaDetail';
import AboutUs from './components/AboutUs/AboutUs';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  if(window.location.pathname == '/' || window.location.pathname == '/Offers' || window.location.pathname == '/AboutUs' || window.location.pathname == '/Cart' || window.location.pathname == '/pizza' ) {
  return (
      <div className="menu-offers">
          <NavigationBar logoImageUrl="https://image.ibb.co/jxR33S/logosup.png" />
          <Switch>
              <Route exact path="/" component={ Menu } />
              <Route path="/Offers" component={ Offers } />
              <Route path="/AboutUs" component={ AboutUs } />
              <Route path="/Cart" component={ Cart } />
              <Route path="/pizza" component= { PizzaDetail } />
          </ Switch>
      </div>
      );
  }
  else {
    return (
      <div>
        <Redirect to="/" />
      </ div>
    );
  }
};

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><Router><App /></ Router></Provider>, document.getElementById('app'));
