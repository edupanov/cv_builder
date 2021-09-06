import React from 'react';
import {useFormik} from "formik";
import {useStyles} from "./styles/loginStyles";
import {LoginErrorType} from "./types/loginTypesError";
import {Redirect} from "react-router";
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import {Button, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useTypeSelector} from "../../../store/hooks/useTypeSelector";
import {PATH} from "../../../routes/Routes";

type LoginFormType = {
    openLoginFormClickHandler: () => void
}

const SignUp = (props: LoginFormType) => {

    const styles = useStyles()

    const {signUp} = useActions()
    const {isSuccess, message} = useTypeSelector(state => state.signUp.data)

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
        },
        validate: (values) => {

            const errors: LoginErrorType = {};
            if (!values.name) {
                errors.name = 'Name required';
            }
            if (!values.surname) {
                errors.surname = 'Surname required';
            }
            if (!values.email) {
                errors.email = 'Email required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Password required';
            }

            return errors;
        },
        onSubmit: values => {
            const newUser = {
                name: values.name,
                surname: values.surname,
                email: values.email,
                password: values.password
            }
            signUp(newUser)
            formik.resetForm()
        }
    })

    if (isSuccess) {
        return <Redirect to={PATH.CREATE_CV}/>
    }

    return (
        <div>
            <Grid container justifyContent="center">
                <Grid className={styles.loginWrapper} item xs={12}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormGroup>
                                <div className={styles.inputWrapper}>
                                    <TextField
                                        type="search"
                                        label="Name"
                                        margin="normal"
                                        {...formik.getFieldProps("name")}
                                    />
                                    {formik.errors.name ?
                                        <div className={styles.errorForm}>{formik.errors.name}</div> : null}
                                    <TextField
                                        type="search"
                                        label="Surname"
                                        margin="normal"
                                        {...formik.getFieldProps("surname")}
                                    />
                                    {formik.errors.surname ?
                                        <div className={styles.errorForm}>{formik.errors.surname}</div> : null}
                                    <TextField
                                        type="search"
                                        label="Email"
                                        margin="normal"
                                        {...formik.getFieldProps("email")}
                                    />
                                    {formik.errors.email ?
                                        <div className={styles.errorForm}>{formik.errors.email}</div> : null}
                                    <TextField
                                        type="password"
                                        label="Password"
                                        margin="normal"
                                        {...formik.getFieldProps("password")}
                                    />
                                </div>
                                {formik.errors.password ?
                                    <div className={styles.errorForm}>{formik.errors.password}</div> : null}
                                <div className={styles.buttonWrapper}>
                                    <Button className={styles.button} type={'submit'} variant={'contained'}
                                            color={'primary'}>register</Button>
                                    <Button className={styles.button} variant={'contained'} color={'primary'}
                                            onClick={props.openLoginFormClickHandler}>Cancel</Button>
                                </div>
                                <div className={isSuccess === true ? styles.okStatus : styles.failureStatus}>
                                    <span>{message}</span></div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>

    );
};

export default SignUp;