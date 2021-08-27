import React from 'react';
import {FormControl, FormGroup, TextField} from "@material-ui/core";
import SaveButton from "../../../../shared/components/SaveButton";

const Hobbies = () => {
    return (
        <div>
            <h2 className='title'>Hobbies</h2>
            <form>
                <FormControl>
                    <FormGroup>
                        <TextField
                            className='professionalSummary'
                            id="standard-multiline-static"
                            label="What do you like?"
                            multiline
                            rows={4}
                            defaultValue=""
                        />
                    </FormGroup>
                </FormControl>
            </form>
            <SaveButton />
        </div>
    );
};

export default Hobbies;