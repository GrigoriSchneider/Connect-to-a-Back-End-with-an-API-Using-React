
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';

import { persistStore } from 'redux-persist';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
const persistore = persistStore(store) // redux-persist


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

