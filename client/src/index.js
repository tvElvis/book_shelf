import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';


import reducers from './reducers';
import Routes from './routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware,ReduxThunk)));

// const createStoreWithMiddleware = composeEnhancers(applyMiddleware(promiseMiddleware,ReduxThunk)(createStore))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);