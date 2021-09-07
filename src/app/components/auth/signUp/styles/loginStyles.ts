import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginTop: 15,
            fontSize: 26,
            fontFamily: 'sans-serif',
            color: '#ead29a',
            textAlign: 'center',
            textShadow: '3px 3px 0 #000, -1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
        },
        loginWrapper: {
            flexBasis: 0
        },
        button: {
            backgroundColor: '#6b238c',
            '&:hover': {backgroundColor: '#deb887'},
        },
        buttonWrapper: {
            paddingTop: 20,
            display: 'flex',
            justifyContent: 'space-around',
        },
        inputWrapper: {
            width: 250,
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
        },
        errorForm: {
            color: 'red'
        },
        okStatus: {
            marginTop: 15,
            fontSize: 18,
            textAlign: 'center',
            color: 'green'
        },
        failureStatus: {
            marginTop: 15,
            fontSize: 18,
            textAlign: 'center',
            color: 'red'
        }
    }),
);