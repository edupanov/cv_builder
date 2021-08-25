import React from 'react';
import {TextField} from "@material-ui/core";

const ProfessionalSummary = () => {
    return (
        <div>
            <h2 className='title'>Professional Summary</h2>
            <TextField
                className='textArea'
                id="standard-multiline-static"
                label="Include 2-3 clear sentences about your overall experience"
                multiline
                rows={4}
                defaultValue=""
            />
        </div>
    );
};

export default ProfessionalSummary;