import React from 'react';
import './App.css';
import {History} from 'history'
import {ConnectedRouter} from "connected-react-router";
import Routes from "./routes/Routes";
import NavBar from "./components/navBar/NavBar";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import {ru} from "date-fns/locale";

interface AppHistory {
    history: History
}

function App({history}: AppHistory) {
    return (
        <ConnectedRouter history={history}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
                <div className="App">
                    <NavBar/>
                    <Routes/>
                </div>
            </MuiPickersUtilsProvider>

        </ConnectedRouter>
    );
}

export default App;
