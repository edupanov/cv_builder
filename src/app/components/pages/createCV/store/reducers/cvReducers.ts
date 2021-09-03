import {cvActionType, CvActionTypes, CvStateInterface} from "../actionTypes/cvActiontypes";

const initialState: CvStateInterface = {
    data: null,
    errors: {},
    isLoading: false
}

export const cvReducer = (state: CvStateInterface = initialState, action: cvActionType): CvStateInterface => {
    switch (action.type) {
        case CvActionTypes.SAVE_CV_LOCAL:
            return {...state, data: {...action.payload}}
        case CvActionTypes.SAVE_CV_SUCCESS:
            return {...state, isLoading: false}
        case CvActionTypes.SAVE_CV_FAILURE:
            return {...state, errors: {}}
        default:
            return state
    }
}
