import {Dispatch} from "redux";
import {SignUpActionType, SignUpActionTypes} from "../actiontypes/signUpActiontypes";
import {RootState} from "../../../../store/rootReducer";
import * as SignUpRequests from '../requests/signUpRequests'
import {SignUpInterface} from "../../signUp/types/signUpInterface";
import * as ResumeRequests from "../../../pages/createCV/store/requests/resumeRequest";
import {DefaultPagedResponse} from "../../../../shared/types/defaultPagedResponse";
import {CvInterface} from "../../../pages/createCV/types/cvInterface";
import {cvActionType, CvActionTypes} from "../../../pages/createCV/store/actionTypes/cvActiontypes";

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
    async (dispatch: Dispatch<SignUpActionType | cvActionType>, getState: () => RootState) => {
        dispatch({type: SignUpActionTypes.SIGN_UP})

        await SignUpRequests.signIn(email, password)
            .then(response => {
                dispatch({type: SignUpActionTypes.SIGN_UP_SUCCESS, payload: response})
            })
            .catch(error => {
                dispatch({type: SignUpActionTypes.SIGN_UP_FAILURE, error: error})
            })
        await ResumeRequests.getResume(email)
            .then(async (response: DefaultPagedResponse<Array<CvInterface>>) => {
                if (response.isSuccess) {
                    dispatch({
                        type: CvActionTypes.GET_CV_SUCCESS,
                        payload: {
                            data: response.data as Array<CvInterface>
                        }
                    })
                }
            })
            .catch(error => {
                dispatch({type: CvActionTypes.SAVE_CV_FAILURE, errors: error})
            })
    }