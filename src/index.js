import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './redux/store.js'
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react'

let persistor = persistStore(store);

ReactDOM.render(
<Provider store ={store}>
<PersistGate persistor ={persistor}>
<App/>
</PersistGate>
</Provider>,

document.getElementById("root"))


