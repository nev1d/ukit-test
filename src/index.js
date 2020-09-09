import React from 'react';
import ReactDOM from 'react-dom';
import './SCSS/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, compose} from "redux"
import {Provider} from "react-redux"
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer, compose (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
