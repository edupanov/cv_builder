import React from 'react';
import {StyledCreateCv} from "./styles/styledCreateCv";
import {FormControl, FormGroup} from "@material-ui/core";
import PersonalDetails from "./components/PersonalDetails";
import ProfessionalSummary from "./components/ProfessionalSummary";
import EmploymentHistory from "./components/EmploymentHistory";
import Education from "./components/Education";
import WebsitesSocialLinks from "./components/WebsitesSocialLinks";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";

const CreateCv = () => {

    return (
        <StyledCreateCv>
            <form>
                <FormControl>
                    <FormGroup>
                        <PersonalDetails/>
                        <ProfessionalSummary/>
                        <EmploymentHistory/>
                        <Education/>
                        <WebsitesSocialLinks/>
                        <Skills/>
                        <Hobbies/>
                    </FormGroup>
                </FormControl>
            </form>
        </StyledCreateCv>
    );
};

export default CreateCv;