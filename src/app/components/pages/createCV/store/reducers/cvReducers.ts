import {cvActionType, CvActionTypes, CvStateInterface} from "../actionTypes/cvActiontypes";

const initialState: CvStateInterface = {
    data: null,
}

export const cvReducer = (state: CvStateInterface = initialState, action: cvActionType): CvStateInterface => {
    switch (action.type) {
        case CvActionTypes.SAVE_CV:
            return {...state, data: {...action.payload, ...state.data}}
        default:
            return state
    }
}