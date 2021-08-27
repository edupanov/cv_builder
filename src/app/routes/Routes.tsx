import React from 'react';
import {Route, Switch} from "react-router";
import MainPage from "../components/pages/mainPage/MainPage";
import CreateCv from "../components/pages/createCV/CreateCV";
import Pdf from "../components/pages/pdf/PDF";

export const PATH = {
    MAIN: '/',
    CREATE_CV: '/create-my-cv',
    VIEW_PDF: '/view-pdf'
}

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={PATH.MAIN} component={MainPage}/>
                <Route exact path={PATH.CREATE_CV} component={CreateCv}/>
                <Route exact path={PATH.VIEW_PDF} component={Pdf}/>
            </Switch>
        </div>
    );
};

export default Routes;