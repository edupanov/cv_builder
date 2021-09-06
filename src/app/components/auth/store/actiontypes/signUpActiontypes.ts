export interface SignUpStateInterface {
    isSuccess: boolean
    errors: {}
    data: {}
}

export enum SignUpActionTypes {
    SIGN_UP = '[Sign Up] Sign Up',
    SIGN_UP_SUCCESS = '[Sign Up] Sign Up Success',
    SIGN_UP_FAILURE = '[Sign Up] Sign Up Failure'
}

interface SignUp {
    type: SignUpActionTypes.SIGN_UP
}

interface SignUpSuccess {
    type: SignUpActionTypes.SIGN_UP_SUCCESS
    payload: {}
}


interface SignUpFailure {
    type: SignUpActionTypes.SIGN_UP_FAILURE
    error: {}
}

export type SignUpActionType = SignUpSuccess | SignUpFailure | SignUp