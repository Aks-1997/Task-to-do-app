import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducer,composeWithDevTools());


ReactDOM.render(
   <Provider store={store}>
     <BrowserRouter> 
        <App /> 
     </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
reportWebVitals();
