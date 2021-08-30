import React from 'react';
import {Button} from "@material-ui/core";
import {useActions} from "../../store/hooks/useActions";
import {CvInterface} from "../../components/pages/createCV/types/cvInterface";
import {useAlert} from "react-alert";

type SaveButtonPropsType = {
    resume: CvInterface
}

const SaveButton = (props: SaveButtonPropsType) => {
    const {resume} = props
    const alert = useAlert()
    const {saveCv} = useActions()

    const saveInfo = () => {
        if(!resume.personalDetails!.logo) {
           return  alert.show('Add logo!')
        }
        saveCv(resume)
        alert.show('Saved Success!')
    }
    return (

        <Button className={'saveButton'} onClick={saveInfo}>save</Button>
    );
};

export default SaveButton;
