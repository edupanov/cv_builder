import {CvInterface} from "../../types/cvInterface";
import {Dispatch} from "redux";
import {cvActionType, CvActionTypes} from "../actionTypes/cvActiontypes";
import {RootState} from "../../../../../store/rootReducer";
import * as ResumeRequests from '../requests/resumeRequest'
import {DefaultPagedResponse} from "../../../../../shared/types/defaultPagedResponse";

export const saveCv = (cv: CvInterface) =>
    (dispatch: Dispatch<cvActionType>, getState: () => RootState) => {
        dispatch({type: CvActionTypes.SAVE_CV_LOCAL, payload: cv})

    }

export const saveCvServer = (resume: CvInterface) =>
    async (dispatch: Dispatch<cvActionType>, getState: () => RootState) => {

        dispatch({type: CvActionTypes.SAVE_CV_SERVER})
        await ResumeRequests.setResume(resume)
            .then(async () => {

                dispatch({type: CvActionTypes.SAVE_CV_SUCCESS})
            })
            .catch(error => {
                dispatch({type: CvActionTypes.SAVE_CV_FAILURE, errors: error})
            })
    }

export const getResume = (email: string) =>
    async (dispatch: Dispatch<cvActionType>, getState: () => RootState) => {
        dispatch({type: CvActionTypes.GET_CV})

        await ResumeRequests.getResume(email)
            .then(async (response: DefaultPagedResponse<Array<CvInterface>>) => {
                console.log('')
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
