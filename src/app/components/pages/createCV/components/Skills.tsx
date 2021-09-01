import React, {ChangeEvent, useEffect, useState} from 'react';
import {Checkbox, FormControl, Input, InputLabel, ListItemText, MenuItem, Select, TextField} from "@material-ui/core";
import {resumeInfoPropsType} from "./Tabs";
import {
    dbmsList,
    frameworksList,
    ideList,
    programmingLanguagesList,
    stateManagementList,
    testingList,
    vcsList,
    webTechnologiesList
} from "./skills/skillsList";


const Skills = (props: resumeInfoPropsType) => {
    const {resume, setResume} = props

    const [stateManagement, setStateManagement] = useState<Array<string>>([]);
    const [webTechnologies, setWebTechnologies] = useState<Array<string>>([]);
    const [programmingLanguages, setProgrammingLanguages] = useState<Array<string>>([]);
    const [dbms, setDbms] = useState<Array<string>>([]);
    const [testing, setTesting] = useState<Array<string>>([]);
    const [ide, setIde] = useState<Array<string>>([]);
    const [vcs, setVcs] = useState<Array<string>>([]);
    const [frameworks, setFrameworks] = useState<Array<string>>([]);
    const [otherSkills, setOtherSkills] = useState('');


    const handleChangeWebTechnologies = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setWebTechnologies(event.target.value);
    };
    const handleChangeStateManagement = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setStateManagement(event.target.value);
    };
    const handleChangeProgrammingLanguages = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setProgrammingLanguages(event.target.value);
    };
    const handleChangeDbms = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setDbms(event.target.value);
    };
    const handleChangeTesting = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setTesting(event.target.value);
    };
    const handleChangeIde = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setIde(event.target.value);
    };
    const handleChangeVcs = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setVcs(event.target.value);
    };
    const handleChangeFrameworks = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setFrameworks(event.target.value);
    };
    const handleChangeOther = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        setOtherSkills(value)
    }

    const userSkills = {
        webTechnologies: webTechnologies.join(', '),
        stateManagement: stateManagement.join(', '),
        programmingLanguages: programmingLanguages.join(', '),
        dbms: dbms.join(', '),
        testing: testing.join(', '),
        ide: ide.join(', '),
        vcs: vcs.join(', '),
        frameworks: frameworks.join(', '),
        other: otherSkills,
    }

    useEffect(() => {
        setResume({...resume, skills: userSkills})
    }, [stateManagement, webTechnologies, programmingLanguages, dbms, testing, ide, vcs, frameworks, otherSkills])

    return (
        <div className={'skillsWrapper'}>
            <h2 className='title'>Skills</h2>
            <div>
                <h3 className='titleTechnologies'>Web Technologies</h3>
                <FormControl className={'skills'}>
                    <InputLabel id="demo-mutiple-checkbox-label">Select Technologies</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={webTechnologies}
                        onChange={handleChangeWebTechnologies}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {webTechnologiesList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={webTechnologies.indexOf(el) > -1}/>
                                <ListItemText primary={el}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>
                <h3 className='titleTechnologies'>State Management</h3>
                <FormControl className={'skills'}>
                    <InputLabel id="demo-mutiple-checkbox-label">Select Technologies</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={stateManagement}
                        onChange={handleChangeStateManagement}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {stateManagementList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={stateManagement.indexOf(el) > -1}/>
                                <ListItemText primary={el}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>
                <h3 className='titleTechnologies'>Programming Languages</h3>
                <FormControl className={'skills'}>
                    <InputLabel id="demo-mutiple-checkbox-label">Select Technologies</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={programmingLanguages}
                        onChange={handleChangeProgrammingLanguages}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {programmingLanguagesList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={programmingLanguages.indexOf(el) > -1}/>
                                <ListItemText primary={el}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>
                <h3 className='titleTechnologies'>DBMS</h3>
                <FormControl className={'skills'}>
                    <InputLabel id="demo-mutiple-checkbox-label">Select Technologies</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={dbms}
                        onChange={handleChangeDbms}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {dbmsList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={dbms.indexOf(el) > -1}/>
                                <ListItemText primary={el}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>
                <h3 className='titleTechnologies'>Testing</h3>
                <FormControl className={'skills'}>
                    <InputLabel id="demo-mutiple-checkbox-label">Select Technologies</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={testing}
                        onChange={handleChangeTesting}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {testingList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={testing.indexOf(el) > -1}/>
                                <ListItemText primary={el}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>
                <h3 className='titleTechnologies'>Ide</h3>
                <FormControl className={'skills'}>
                    <InputLabel id="demo-mutiple-checkbox-label">Select Technologies</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={ide}
                        onChange={handleChangeIde}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {ideList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={ide.indexOf(el) > -1}/>
                                <ListItemText primary={el}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>
                <h3 className='titleTechnologies'>VCS</h3>
                <FormControl className={'skills'}>
                    <InputLabel id="demo-mutiple-checkbox-label">Select Technologies</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={vcs}
                        onChange={handleChangeVcs}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {vcsList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={vcs.indexOf(el) > -1}/>
                                <ListItemText primary={el}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>
                <h3 className='titleTechnologies'>Frameworks and Libraries</h3>
                <FormControl className={'skills'}>
                    <InputLabel id="demo-mutiple-checkbox-label">Select Technologies</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={frameworks}
                        onChange={handleChangeFrameworks}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {frameworksList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={frameworks.indexOf(el) > -1}/>
                                <ListItemText primary={el}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>
                <TextField
                    className={'other'}
                    label="Other Technologies"
                    name={"skill"}
                    type="search"
                    onChange={handleChangeOther}
                />
            </div>

        </div>
    );
};

export default Skills;
