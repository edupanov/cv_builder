import {CvInterface} from "../../types/cvInterface";
import {Dispatch} from "redux";
import {cvActionType, CvActionTypes} from "../actionTypes/cvActiontypes";
import {RootState} from "../../../../../store/rootReducer";

export const saveCv = (cv: CvInterface) =>
    (dispatch: Dispatch<cvActionType>, getState: () => RootState) => {
        dispatch({type: CvActionTypes.SAVE_CV, payload: cv})
    }