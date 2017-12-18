import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';


import App from './App';
import './index.css';
import reducer from './reducers'
import state from "./data.js";
import registerServiceWorker from "./registerServiceWorker.js";

const store = createStore(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<div>
		<header>
		</header>
	  <Provider store={store}>
	    <App />
	  </Provider>
  </div>,
  document.getElementById('root')
);

registerServiceWorker();


// window.FB.getLoginStatus(function(response) {
//     store.dispatch({type: "SET_FB_LOGIN_STATUS", response: response});
// });

export default store;