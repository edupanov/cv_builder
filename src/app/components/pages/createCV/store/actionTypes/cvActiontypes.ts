import {CvInterface} from "../../types/cvInterface";

export interface CvStateInterface {
    data: CvInterface | null
    errors: {}
    isLoading: boolean
}

export enum CvActionTypes {
    SAVE_CV_LOCAL = '[Save CV] Save CV',
    SAVE_CV_SUCCESS = '[Save CV] Save CV Success',
    SAVE_CV_FAILURE = '[Save CV] Save CV Failure',
    SAVE_CV_SERVER = '[Save CV Server] Save CV Server'
}

interface saveSVLocal {
    type: CvActionTypes.SAVE_CV_LOCAL
    payload: CvInterface
}
interface saveSVServer {
    type: CvActionTypes.SAVE_CV_SERVER
}
interface saveSVServer_Success {
    type: CvActionTypes.SAVE_CV_SUCCESS
}
interface saveSVServer_Failure {
    type: CvActionTypes.SAVE_CV_FAILURE
    errors: {}
}


export type cvActionType = saveSVLocal | saveSVServer_Success | saveSVServer_Failure | saveSVServer
