import React, {ChangeEvent, useState} from 'react';
import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {ProfessionalSummaryInterface} from "../types/cvInterface";
import {useActions} from "../../../../store/hooks/useActions";

const ProfessionalSummary = () => {
    const {saveCv} = useActions()
    const [professionalSummary, setProfessionalSummary] = useState({} as ProfessionalSummaryInterface)
    const handleChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setProfessionalSummary({...professionalSummary, [name]: value})
    }
    const saveInfo = () => {
        saveCv({professionalSummary})
    }
    return (
        <div>
            <h2 className='title'>Professional Summary</h2>
            <form>
                <FormControl>
                    <FormGroup>
                        <TextField
                            className='textArea'
                            name={'info'}
                            id="standard-multiline-static"
                            label="Include 2-3 clear sentences about your overall experience"
                            multiline
                            rows={4}
                            defaultValue=""
                            onChange={handleChangeInfo}
                        />
                    </FormGroup>
                </FormControl>
            </form>
            <Button className={'saveButton'} onClick={saveInfo}>save</Button>
        </div>
    );
};

export default ProfessionalSummary;