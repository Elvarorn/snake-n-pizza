import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import Menu from './components/Menu/Menu';
import Offers from './components/Offers/Offers';

const App = () => {
  return (<div className="menu-offers">
            <Menu/>
            <p> offers :</p>
            <Offers/>
        </div>
      );
};

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><App /></Provider>, document.getElementById('app'));
