import React from 'react';
import {Route, Switch} from "react-router";
import MainPage from "../components/pages/mainPage/MainPage";
import CreateCv from "../components/pages/createCV/CreateCV";
import Pdf from "../components/pages/pdf/PDF";
import MyResume from "../components/pages/myResume/MyResume";

export const PATH = {
    MAIN: '/',
    CREATE_CV: '/create',
    VIEW_PDF: '/view-pdf',
    MY_RESUME: '/view-my-resume'
}

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={PATH.MAIN} component={MainPage}/>
                <Route exact path={PATH.CREATE_CV} component={CreateCv}/>
                <Route exact path={PATH.VIEW_PDF} component={Pdf}/>
                <Route exact path={PATH.MY_RESUME} component={MyResume}/>
            </Switch>
        </div>
    );
};

export default Routes;