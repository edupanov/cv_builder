import React, {ChangeEvent, useEffect, useState} from 'react';
import {FormControl, FormGroup, TextField} from "@material-ui/core";
import {ProfessionalSummaryInterface} from "../types/cvInterface";
import {resumeInfoPropsType} from "./Tabs";


const ProfessionalSummary = (props: resumeInfoPropsType) => {
    const {resume, setResume} = props
    const [professionalSummary, setProfessionalSummary] = useState({info: 'Experienced PMP with a background in law and 7+ years experience growing revenue for a Massachusetts-based electronics firm. Seeking to leverage leadership expertise as project manager for Paylocity. Guest speaker at the Northeast Lean Conference in 2014.'} as ProfessionalSummaryInterface)
    const handleChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setProfessionalSummary({...professionalSummary, [name]: value})
    }

    useEffect(() => {
        setResume({...resume, professionalSummary})
    }, [professionalSummary])

    return (
        <div className={'professionalSummary'}>
            <h2 className='title'>Professional Summary</h2>
            <form>
                <FormControl className='textArea'>
                    <FormGroup>
                        <TextField

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
        </div>
    );
};

export default ProfessionalSummary;
