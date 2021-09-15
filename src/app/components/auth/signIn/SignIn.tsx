import React from 'react';
import {useFormik} from "formik";
import {Redirect} from "react-router";
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import {Button, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useTypeSelector} from "../../../store/hooks/useTypeSelector";
import {PATH} from "../../../routes/Routes";
import {useStyles} from "../signUp/styles/loginStyles";
import {LoginErrorType} from "../signUp/types/loginTypesError";

type LoginFormType = {
    openLoginFormClickHandler: () => void
}

const SignIn = (props: LoginFormType) => {

    const styles = useStyles()

    const {signIn} = useActions()
    const {token, message} = useTypeSelector(state => state.signUp.data)

    console.log('тест комицуктаефыаа')

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors: LoginErrorType = {};
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
            signIn(values.email, values.password)
            formik.resetForm()
        }
    })

    if (token) {
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
                                        type="email"
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
                                            color={'primary'}>sigIn</Button>
                                    <Button className={styles.button} variant={'contained'} color={'primary'}
                                            onClick={props.openLoginFormClickHandler}>Cancel</Button>
                                </div>
                                <div className={token === true ? styles.okStatus : styles.failureStatus}>
                                    <span>{message}</span></div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>

    );
};

export default SignIn;