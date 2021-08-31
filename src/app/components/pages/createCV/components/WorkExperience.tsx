import React, {ChangeEvent, useEffect, useState} from 'react';
import {FormControl, FormGroup, IconButton, TextField} from "@material-ui/core";
import {resumeInfoPropsType} from "./Tabs";
import AddIcon from '@material-ui/icons/Add';
import {WorkExperienceInterface} from "../types/cvInterface";

const WorkExperience = (props: resumeInfoPropsType) => {

    const {resume, setResume} = props
    const [workExperience, setWorkExperience] = useState({} as WorkExperienceInterface)
    const [arrayWorkExperience, setArrayWorkExperience] = useState<Array<WorkExperienceInterface>>([{
        dateFrom: '01.01.0001',
        dateTo: '01.01.0005',
        company: 'OOO Roga and Copita',
        position: 'Dobitchik',
        description: 'Dobival roga and copita'
    }])
    let [newElement, setNewElement] = useState<Array<JSX.Element>>([<div key={0}/>])
    let newObj = {} as WorkExperienceInterface
    const handleChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        newObj = {...newObj, [name]: value}
        setWorkExperience(newObj)
        setArrayWorkExperience([...arrayWorkExperience, newObj])
    }

    const onClickHAndler = () => {
        setNewElement([...newElement,
            <div key={newElement.length}>
                <div>
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
                </div>
                <TextField
                    className={'info'}
                    label="Company"
                    name={"company"}
                    type="search"
                    onChange={handleChangeInfo}
                />
                <TextField
                    className={'info'}
                    label="Position"
                    name={"position"}
                    type="search"
                    onChange={handleChangeInfo}
                />
                <TextField
                    className={'info'}
                    label="Description"
                    name={"info"}
                    type="search"
                    onChange={handleChangeInfo}
                />
            </div>
        ])
    }

    useEffect(() => {
        setResume({...resume, workExperience: arrayWorkExperience})
    }, [workExperience])

    return (
        <div className={'workExperience'}>
            <h2 className='title'>Work Experience</h2>
            <IconButton onClick={onClickHAndler}><AddIcon/></IconButton>
            <form>
                <FormControl className={'inputWrapper'}>
                    <FormGroup>
                        {newElement}
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};

export default WorkExperience;
