import React from 'react';
import {Button} from "@material-ui/core";
import {useActions} from "../../store/hooks/useActions";
import {PersonalDetailsInterface} from "../../components/pages/createCV/types/cvInterface";
import {useAlert} from "react-alert";

type SaveButtonPropsType = {
    personalDetails?: PersonalDetailsInterface
}

const SaveButton = (props: SaveButtonPropsType) => {
    const {personalDetails} = props
    const alert = useAlert()
    const {saveCv} = useActions()

    const saveInfo = () => {
        // @ts-ignore
        if(!personalDetails.logo) {
            return alert.show('Oooops!')
        }
        saveCv({personalDetails})
        alert.show('Saved Success!')
    }
    return (

        <Button className={'saveButton'} onClick={saveInfo}>save</Button>
    );
};

export default SaveButton;