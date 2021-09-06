import React from 'react';
import {StyledCreateCv} from "./styles/styledCreateCv";
import VerticalTabs from "./components/Tabs";
import Pdf from "../pdf/PDF";
import { NavLink } from 'react-router-dom';
import {PATH} from "../../../routes/Routes";
import NavBar from "../../navBar/NavBar";

const CreateCv = () => {


    return (
        <>
            <NavBar/>
            <StyledCreateCv>
                <VerticalTabs/>
                <Pdf/> {/*не забыть убрать*/}
                <div>
                    <NavLink to={PATH.VIEW_PDF} target="_blank" rel="noopener noreferrer">
                        View PDF
                    </NavLink>
                </div>
            </StyledCreateCv>
        </>

    );
};

export default CreateCv;