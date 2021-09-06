import {Dispatch} from "redux";
import {SignUpActionType, SignUpActionTypes} from "../actiontypes/signUpActiontypes";
import {RootState} from "../../../../store/rootReducer";
import * as SignUpRequests from '../requests/signUpRequests'
import {SignUpInterface} from "../../signUp/types/signUpInterface";

export const signUp = (user: SignUpInterface) =>
    async (dispatch: Dispatch<SignUpActionType>, getState: () => RootState) => {
    dispatch({type: SignUpActionTypes.SIGN_UP})

        await SignUpRequests.signUp(user)
            .then(response => {
                dispatch({type: SignUpActionTypes.SIGN_UP_SUCCESS, payload: response})
            })
            .catch(error => {
                dispatch({type: SignUpActionTypes.SIGN_UP_FAILURE, error: error})
            })
    }

export const signIn = (email: string, password: string) =>
    async (dispatch: Dispatch<SignUpActionType>, getState: () => RootState) => {
        dispatch({type: SignUpActionTypes.SIGN_UP})

        await SignUpRequests.signIn(email, password)
            .then(response => {
                dispatch({type: SignUpActionTypes.SIGN_UP_SUCCESS, payload: response})
            })
            .catch(error => {
                dispatch({type: SignUpActionTypes.SIGN_UP_FAILURE, error: error})
            })
    }