import React from 'react';
import {TextField} from "@material-ui/core";
import {KeyboardDatePicker} from "@material-ui/pickers";

const PersonalDetails = () => {

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(''),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <div className='personalDetailsWrapper'>
            <h2 className='title'>Personal Details</h2>
            <TextField
                error={false}
                id="filled-error-helper-text"
                label="Wanted Job Title"
                defaultValue=""
                helperText="Incorrect entry."
            />
            <TextField
                error={false}
                id="filled-error-helper-text"
                label="First Name"
                defaultValue=""
                helperText="Incorrect entry."
            />
            <TextField
                error={false}
                id="filled-error-helper-text"
                label="Last Name"
                defaultValue=""
                helperText="Incorrect entry."
            />
            <KeyboardDatePicker
                className='dataPicker'
                margin="normal"
                id="date-picker-dialog"
                format="dd.MM.yyyy"
                label="Дата рождения"
                helperText="Incorrect entry."
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                error={false}

            />
            <TextField
                error={false}
                id="filled-error-helper-text"
                label="Phone"
                defaultValue=""
                helperText="Incorrect entry."
            />
            <TextField
                error={false}
                id="filled-error-helper-text"
                label="Email"
                defaultValue=""
                helperText="Incorrect entry."
            />
            <TextField
                error={false}
                id="filled-error-helper-text"
                label="Country"
                defaultValue=""
                helperText="Incorrect entry."
            />
            <TextField
                error={false}
                id="filled-error-helper-text"
                label="City"
                defaultValue=""
                helperText="Incorrect entry."
            />
            <TextField
                error={false}
                id="filled-error-helper-text"
                label="Address"
                defaultValue=""
                helperText="Incorrect entry."
            />
            <TextField
                error={false}
                id="filled-error-helper-text"
                label="Postal Code"
                defaultValue=""
                helperText="Incorrect entry."
            />
        </div>

    );
};

export default PersonalDetails;