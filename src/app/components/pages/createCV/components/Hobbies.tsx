import React from 'react';
import {TextField} from "@material-ui/core";

const Hobbies = () => {
    return (
        <div>
            <h2 className='title'>Hobbies</h2>
            <TextField
                className='professionalSummary'
                id="standard-multiline-static"
                label="What do you like?"
                multiline
                rows={4}
                defaultValue=""
            />
        </div>
    );
};

export default Hobbies;