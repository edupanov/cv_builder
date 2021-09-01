import React, {ChangeEvent, useEffect, useState} from 'react';
import {FormControl, FormGroup, TextField} from "@material-ui/core";
import {resumeInfoPropsType} from "./Tabs";
import {HobbiesInterface} from "../types/cvInterface";

const Hobbies = (props: resumeInfoPropsType) => {
    const {resume, setResume} = props
    const [hobbies, setHobbies] = useState({info: 'Hunting, Fishing, Gathering'} as HobbiesInterface)
    const handleChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setHobbies({...hobbies, [name]: value})
    }

    useEffect(() => {
        setResume({...resume, hobbies})
    }, [setHobbies])

    return (
        <div>
            <h2 className='title'>Hobbies</h2>
            <form>
                <FormControl className='textArea'>
                    <FormGroup>
                        <TextField
                            className='professionalSummary'
                            id="standard-multiline-static"
                            label="What do you like?"
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

export default Hobbies;
