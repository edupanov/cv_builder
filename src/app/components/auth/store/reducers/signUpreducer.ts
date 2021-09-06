import {SignUpActionType, SignUpActionTypes, SignUpStateInterface,} from "../actiontypes/signUpActiontypes";

const initialState: SignUpStateInterface = {
    isSuccess: false,
    errors: {},
    data: {}
}

export const SignUpReducer = (state = initialState, action: SignUpActionType): SignUpStateInterface => {
    switch (action.type) {
        case SignUpActionTypes.SIGN_UP:
            return {
                ...state,
                isSuccess: false
            }
        case SignUpActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                data: action.payload
            }
        case SignUpActionTypes.SIGN_UP_FAILURE:
            return {
                ...state, errors: action.error
            }
        default:
            return state
    }
}