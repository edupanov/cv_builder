import {CvInterface} from "../../types/cvInterface";
import {Dispatch} from "redux";
import {cvActionType, CvActionTypes} from "../actionTypes/cvActiontypes";
import {RootState} from "../../../../../store/rootReducer";

export const saveCv = (cv: CvInterface) =>
    (dispatch: Dispatch<cvActionType>, getState: () => RootState) => {
        dispatch({type: CvActionTypes.SAVE_CV, payload: cv})
        let {data} = getState().resume

        if (data) {
            const newData = cv
            console.log(newData)
            dispatch({type: CvActionTypes.SAVE_CV, payload: newData})
        }
        console.log(data)
    }
