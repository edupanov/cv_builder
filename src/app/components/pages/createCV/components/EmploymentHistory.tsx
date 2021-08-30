import React, {ChangeEvent, useEffect, useState} from 'react';
import {FormControl, FormGroup, IconButton, TextField} from "@material-ui/core";
import {resumeInfoPropsType} from "./Tabs";
import {EmploymentHistoryInterface} from "../types/cvInterface";
import AddIcon from '@material-ui/icons/Add';

const EmploymentHistory = (props: resumeInfoPropsType) => {

    const {resume, setResume} = props
    const [employmentHistory, setEmploymentHistory] = useState<Array<EmploymentHistoryInterface>>([])
    let [newElement, setNewElement] = useState<Array<JSX.Element>>([<div key={0}/>])

    const handleChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
       // setEmploymentHistory(...employmentHistory, {[name]: value})
    }
    console.log(employmentHistory)

    const onClickHAndler = () => {
        setNewElement([...newElement,
            <div key={newElement.length}>
                <TextField
                    helperText="From"
                    name={"dateFrom"}
                    type="date"
                    onChange={handleChangeInfo}
                />
                <TextField
                    helperText="To"
                    name={"dateTo"}
                    type="date"
                    onChange={handleChangeInfo}
                />
                <TextField
                    label="Info"
                    name={"info"}
                    type="search"
                    onChange={handleChangeInfo}
                />
            </div>
        ])
    }

    useEffect(() => {
        setResume({...resume, employmentHistory})
    }, [employmentHistory])

    return (
        <div>
            <h2 className='title'>Employment History</h2>
            <IconButton onClick={onClickHAndler}><AddIcon/></IconButton>
            <form>
                <FormControl>
                    <FormGroup>
                        {newElement}
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};

export default EmploymentHistory;
