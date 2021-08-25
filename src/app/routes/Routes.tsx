import React from 'react';
import {Route, Switch} from "react-router";
import MainPage from "../components/pages/mainPage/MainPage";
import CreateCv from "../components/pages/createCV/CreateCV";

export const PATH = {
    MAIN: '/',
    CREATE_CV: '/create-my-cv'
}

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={PATH.MAIN} component={MainPage}/>
                <Route exact path={PATH.CREATE_CV} component={CreateCv}/>
            </Switch>
        </div>
    );
};

export default Routes;