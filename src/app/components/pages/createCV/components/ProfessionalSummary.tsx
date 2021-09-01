import React, {ChangeEvent, useEffect, useState} from 'react';
import {FormControl, FormGroup, TextField} from "@material-ui/core";
import {ProfessionalSummaryInterface} from "../types/cvInterface";
import {resumeInfoPropsType} from "./Tabs";


const ProfessionalSummary = (props: resumeInfoPropsType) => {
    const {resume, setResume} = props
    const [professionalSummary, setProfessionalSummary] = useState({info: 'Despite the apparent 150 thousand year stagnation in Neanderthal lithic innovation, there is evidence that Neanderthal technology was more sophisticated than was previously thought. However, the high frequency of potentially debilitating injuries could have prevented very complex technologies from emerging, as a major injury would have impeded an expert\'s ability to effectively teach a novice.'} as ProfessionalSummaryInterface)
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
                            name={'professionalSummary'}
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
