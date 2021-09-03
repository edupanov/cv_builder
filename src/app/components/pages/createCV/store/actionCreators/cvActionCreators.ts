import {CvInterface} from "../../types/cvInterface";
import {Dispatch} from "redux";
import {cvActionType, CvActionTypes} from "../actionTypes/cvActiontypes";
import {RootState} from "../../../../../store/rootReducer";
import * as ResumeRequests from '../requests/resumeRequest'


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

