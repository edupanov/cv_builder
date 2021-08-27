import React, {ChangeEvent, useState} from 'react';
import {FormControl, FormGroup, TextField} from "@material-ui/core";
import {KeyboardDatePicker} from "@material-ui/pickers";
import {formatDate} from "../../../../utils/utils";
import {PersonalDetailsInterface} from "../types/cvInterface";
import Logo from './Avatar';
import SaveButton from "../../../../shared/components/SaveButton";

const PersonalDetails = () => {
    const [personalDetails, setPersonalDetails] = useState({} as PersonalDetailsInterface)

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(''),
    );
    const handleChangeInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setPersonalDetails({...personalDetails, [name]: value})
    }

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        setPersonalDetails({
            ...personalDetails, birthDay: formatDate(selectedDate, 'DD.MM.yyyy')
        })
    };

    return (
        <div>
            <h2 className='title'>Personal Details</h2>
            <div>
                <form>
                    <FormControl className='personalDetailsWrapper'>
                        <FormGroup>
                            <div className={'firstInputWrapper'}>
                                <Logo personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/>
                                <div className={'firstColumn'}>
                                    <TextField
                                        error={false}
                                        name={'wantedJobTitle'}
                                        id="filled-error-helper-text"
                                        label="Wanted Job Title"
                                        defaultValue=""
                                        helperText="Incorrect entry."
                                        onChange={handleChangeInfo}
                                    />
                                    <TextField
                                        error={false}
                                        name={'firstName'}
                                        id="filled-error-helper-text"
                                        label="First Name"
                                        defaultValue=""
                                        helperText="Incorrect entry."
                                        onChange={handleChangeInfo}
                                    />
                                    <TextField
                                        error={false}
                                        name={'lastName'}
                                        id="filled-error-helper-text"
                                        label="Last Name"
                                        defaultValue=""
                                        helperText="Incorrect entry."
                                        onChange={handleChangeInfo}
                                    />
                                    <KeyboardDatePicker
                                        className='dataPicker'
                                        name={'birthDay'}
                                        margin="normal"
                                        id="date-picker-dialog"
                                        format="dd.MM.yyyy"
                                        label={"Дата рождения"}
                                        helperText="Incorrect entry."
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        error={false}
                                    />
                                </div>
                            </div>
                            <div className={'inputWrapper'}>
                                <h3 className={'infoTitle'}>Contacts</h3>
                                    <div className={'infoWrapper'}>
                                        <TextField
                                            error={false}
                                            name={'phone'}
                                            id="filled-error-helper-text"
                                            label="Phone"
                                            defaultValue=""
                                            helperText="Incorrect entry."
                                            onChange={handleChangeInfo}
                                        />
                                        <TextField
                                            error={false}
                                            name={'email'}
                                            id="filled-error-helper-text"
                                            label="Email"
                                            defaultValue=""
                                            helperText="Incorrect entry."
                                            onChange={handleChangeInfo}
                                        />
                                    </div>
                            </div>
                            <div className={'inputWrapper'}>
                                <h3 className={'infoTitle'}>Address</h3>
                                <div className={'infoWrapper'}>
                                    <TextField
                                        error={false}
                                        name={'country'}
                                        id="filled-error-helper-text"
                                        label="Country"
                                        defaultValue=""
                                        helperText="Incorrect entry."
                                        onChange={handleChangeInfo}
                                    />
                                    <TextField
                                        error={false}
                                        id="filled-error-helper-text"
                                        name={'city'}
                                        label="City"
                                        defaultValue=""
                                        helperText="Incorrect entry."
                                        onChange={handleChangeInfo}
                                    />
                                </div>
                                <div className={'infoWrapper'}>
                                    <TextField
                                        error={false}
                                        name={'address'}
                                        id="filled-error-helper-text"
                                        label="Address"
                                        defaultValue=""
                                        helperText="Incorrect entry."
                                        onChange={handleChangeInfo}
                                    />
                                    <TextField
                                        error={false}
                                        id="filled-error-helper-text"
                                        name={'postalCode'}
                                        label="Postal Code"
                                        defaultValue=""
                                        helperText="Incorrect entry."
                                        onChange={handleChangeInfo}
                                    />
                                </div>
                            </div>
                        </FormGroup>
                    </FormControl>
                </form>
            </div>
            <SaveButton personalDetails={personalDetails}/>
        </div>

    );
};

export default PersonalDetails;