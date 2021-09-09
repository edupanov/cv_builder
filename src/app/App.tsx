import React from 'react';
import './App.css';
import {History} from 'history'
import {ConnectedRouter} from "connected-react-router";
import Routes from "./routes/Routes";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import {enUS} from "date-fns/locale";

interface AppHistory {
    history: History
}

function App({history}: AppHistory) {
    return (
        <ConnectedRouter history={history}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enUS}>
                <div className="App">
                    <Routes/>
                </div>
            </MuiPickersUtilsProvider>
        </ConnectedRouter>
    );
}

export default App;
