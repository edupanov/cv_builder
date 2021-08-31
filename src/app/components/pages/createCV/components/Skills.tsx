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

    const [saveSkills, setSaveSkills] = useState<Array<string>>([])
    const [otherSkills, setOtherSkills] = useState('');

    const [userSkill, setUserSkill] = useState<Array<string>>([]);
    const [stateManagement, setStateManagement] = useState<Array<string>>([]);
    const [webTechnologies, setWebTechnologies] = useState<Array<string>>([]);
    const [programmingLanguages, setProgrammingLanguages] = useState<Array<string>>([]);
    const [dbms, setDbms] = useState<Array<string>>([]);
    const [testing, setTesting] = useState<Array<string>>([]);
    const [ide, setIde] = useState<Array<string>>([]);
    const [vcs, setVcs] = useState<Array<string>>([]);
    const [frameworks, setFrameworks] = useState<Array<string>>([]);

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
    const handleTesting = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setTesting(event.target.value);
    };
    const handleIde = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setIde(event.target.value);
    };
    const handleVcs = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setVcs(event.target.value);
    };
    const handleFrameworks = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setFrameworks(event.target.value);
    };

    const handleChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        setOtherSkills(value)
    }

    useEffect(() => {

        setSaveSkills([...userSkill, otherSkills])
    }, [userSkill, otherSkills])


    useEffect(() => {
        setResume({...resume, skills: saveSkills})
    }, [saveSkills])

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
                                <Checkbox checked={userSkill.indexOf(el) > -1}/>
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
                                <Checkbox checked={userSkill.indexOf(el) > -1}/>
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
                                <Checkbox checked={userSkill.indexOf(el) > -1}/>
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
                        onChange={handleTesting}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {testingList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={userSkill.indexOf(el) > -1}/>
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
                        onChange={handleIde}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {ideList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={userSkill.indexOf(el) > -1}/>
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
                        onChange={handleVcs}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {vcsList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={userSkill.indexOf(el) > -1}/>
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
                        onChange={handleFrameworks}
                        input={<Input/>}
                        renderValue={(selected) => (selected as string[]).join(', ')}
                    >
                        {frameworksList.map((el: any) => (
                            <MenuItem key={el} value={el}>
                                <Checkbox checked={userSkill.indexOf(el) > -1}/>
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
                    onChange={handleChangeInfo}
                />
            </div>

        </div>
    );
};

export default Skills;
