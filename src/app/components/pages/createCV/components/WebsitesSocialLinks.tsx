import React, {ChangeEvent, useEffect, useState} from 'react';
import {FormControl, FormGroup, IconButton, TextField} from "@material-ui/core";
import {resumeInfoPropsType} from "./Tabs";
import {WebContactsInterface} from "../types/cvInterface";
import AddIcon from "@material-ui/icons/Add";

const WebsitesSocialLinks = (props: resumeInfoPropsType) => {
    const {resume, setResume} = props
    const [webContacts, setWebContacts] = useState({} as WebContactsInterface)
    const [arrayWebContacts, setArrayWebContacts] = useState<Array<WebContactsInterface>>([{
        link: 'https://www.facebook.com/'
    }])
    let [newElement, setNewElement] = useState<Array<JSX.Element>>([<div key={0}/>])
    let newObj = {} as WebContactsInterface
    const handleChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        newObj = {...newObj, [name]: value}
        setWebContacts(newObj)
        setArrayWebContacts([...arrayWebContacts, newObj])
    }

    const onClickHAndler = () => {
        setNewElement([...newElement,
            <div key={newElement.length}>
                <TextField
                    className={'info'}
                    label="Link"
                    name={"link"}
                    type="search"
                    onChange={handleChangeInfo}
                />
            </div>
        ])
    }

    useEffect(() => {
        setResume({...resume, webContacts: arrayWebContacts})
    }, [webContacts])

    return (
        <div className={'workExperience'}>
            <h2 className='title'>Web & Social Links</h2>
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

export default WebsitesSocialLinks;
