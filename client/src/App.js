import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import Menu from './components/Menu/Menu';
import Offers from './components/Offers/Offers';
import NavigationBar from './components/NavigationBar/NavigationBar';

const App = () => {
  return (<div className="menu-offers">
            <NavigationBar logoImageUrl="https://www1-lw.xda-cdn.com/files/2012/11/pizza-snake.jpg" />
            <Menu/>
            <p> offers :</p>
            <Offers/>
        </div>
      );
};

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><App /></Provider>, document.getElementById('app'));
