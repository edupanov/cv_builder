import React, {ChangeEvent, useEffect, useState} from 'react';
import {FormControl, FormGroup, IconButton, TextField} from "@material-ui/core";
import {resumeInfoPropsType} from "./Tabs";
import {EducationInterface} from "../types/cvInterface";
import AddIcon from "@material-ui/icons/Add";

const Education = (props: resumeInfoPropsType) => {

    const {resume, setResume} = props

    const [education, setEducation] = useState({} as EducationInterface)
    const [arrayEducation, setArrayEducation] = useState<Array<EducationInterface>>([{
        dateFrom: '01.01.1000',
        dateTo: '01.01.1004',
        institution: 'Peshernaya skola № 1',
        degree: 'Zolotaya dubina',
    }])
    let [newElement, setNewElement] = useState<Array<JSX.Element>>([<div key={0}/>])
    let newObj = {} as EducationInterface

    const handleChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        newObj = {...newObj, [name]: value}
        setEducation(newObj)
        setArrayEducation([...arrayEducation, newObj])
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
                    label="Educational Institution"
                    name={"institution"}
                    type="search"
                    onChange={handleChangeInfo}
                />
                <TextField
                    className={'info'}
                    label="Academic Degree"
                    name={"degree"}
                    type="search"
                    onChange={handleChangeInfo}
                />
            </div>
        ])
    }

    useEffect(() => {
        setResume({...resume, education: arrayEducation})
    }, [education])

    return (
        <div className={'workExperience'}>
            <h2 className='title'>Education</h2>
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

export default Education;
