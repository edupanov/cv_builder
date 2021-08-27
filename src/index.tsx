import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {configureStore} from "./app/store/configureStore";
import {createBrowserHistory} from "history";
import {BrowserRouter} from "react-router-dom";
import { transitions, positions, types, Provider as AlertProvider } from 'react-alert'
// @ts-ignore
import AlertTemplate from 'react-alert-template-basic'

const baseUrl = '/'
const history = createBrowserHistory({basename: baseUrl})

const store = configureStore(history)


// @ts-ignore
const options = {
    type: types.SUCCESS,
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 3000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE

}


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AlertProvider template={AlertTemplate} {...options}>
                <App history={history}/>
            </AlertProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
