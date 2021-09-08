import React, {useEffect} from 'react';
import {StyledCreateCv} from "./styles/styledCreateCv";
import VerticalTabs from "./components/Tabs";
import Pdf from "../pdf/PDF";
import {NavLink} from 'react-router-dom';
import {PATH} from "../../../routes/Routes";
import NavBar from "../../navBar/NavBar";
import {useActions} from "../../../store/hooks/useActions";
import {useTypeSelector} from "../../../store/hooks/useTypeSelector";

const CreateCv = () => {
const {getResume} = useActions()
    const {user} = useTypeSelector(state => state.signUp.data)
    console.log(user.email)
    useEffect(()=> {getResume(user.email)}, [])
    return (
        <div style={{height: '100vh'}}>
            <NavBar/>
            <StyledCreateCv>
                <VerticalTabs/>
                <div>
                    <NavLink to={PATH.VIEW_PDF} target="_blank" rel="noopener noreferrer">
                        View PDF
                    </NavLink>
                </div>
            </StyledCreateCv>
        </div>

    );
};

export default CreateCv;