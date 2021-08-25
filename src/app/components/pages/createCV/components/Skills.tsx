import React, {ChangeEvent, SyntheticEvent} from 'react';
import {Checkbox, FormControl, Input, InputLabel, ListItemText, MenuItem, Select} from "@material-ui/core";
const skills = [
    'CSS',
    'HTML',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'MongoDB',
    'Rest Api',
    'Angular',
    'Vue',
    'NodeJS',
];
const Skills = () => {

    const [userSkill, setUserSkill] = React.useState<string[]>([]);
    const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
        // @ts-ignore
        setUserSkill(event.target.value);
    };

    return (
        <div>
            <h2 className='title'>Slills</h2>
            <FormControl>
                <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
                <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={userSkill}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => (selected as string[]).join(', ')}
                >
                    {skills.map((skill) => (
                        <MenuItem key={skill} value={skill}>
                            <Checkbox checked={userSkill.indexOf(skill) > -1} />
                            <ListItemText primary={skill} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default Skills;