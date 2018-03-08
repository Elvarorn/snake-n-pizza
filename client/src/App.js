import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import Menu from './components/Menu/Menu';
import Offers from './components/Offers/Offers';
import Cart from './components/Cart/Cart';
import AboutUs from './components/AboutUs/AboutUs';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
      <div className="menu-offers">
          <NavigationBar logoImageUrl="https://image.ibb.co/jxR33S/logosup.png" />
          <Switch>
              <Route exact path="/" component={ Menu } />
              <Route path="/Offers" component={ Offers } />
              <Route path="/AboutUs" component={ AboutUs } />
              <Route path="/Cart" component={ Cart } />
          </ Switch>
      </div>
      );
};

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><Router><App /></ Router></Provider>, document.getElementById('app'));
