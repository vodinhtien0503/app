import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import App1 from './App1.js';
import * as Config from './constants/Config';
import {createStore} from 'redux';
import appReducers from './reducers/index';
import {Provider} from 'react-redux';
const store =createStore(
      appReducers
	);

if(Config.rule){
ReactDOM.render(<App/>, document.getElementById('root'));
}
else{

ReactDOM.render(
	<Provider store={store}>
	<App1/>
	</Provider>
	,document.getElementById('root'));	
}
