import {CvInterface} from "../../types/cvInterface";

export interface CvStateInterface {
    data: Array<CvInterface> | null
    localData: CvInterface | null
    errors: {}
    isLoading: boolean
}

export enum CvActionTypes {
    SAVE_CV_LOCAL = '[Save CV] Save CV',
    SAVE_CV_SUCCESS = '[Save CV] Save CV Success',
    SAVE_CV_FAILURE = '[Save CV] Save CV Failure',
    SAVE_CV_SERVER = '[Save CV Server] Save CV Server',
    GET_CV = '[Get CV] Get Sv',
    GET_CV_SUCCESS = '[Get CV] Get Sv Success',
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
interface getSV {
    type: CvActionTypes.GET_CV
}
interface getSV_Success {
    type: CvActionTypes.GET_CV_SUCCESS
    payload : {data: Array<CvInterface> }

}
interface saveSVServer_Failure {
    type: CvActionTypes.SAVE_CV_FAILURE
    errors: {}
}


export type cvActionType = saveSVLocal | saveSVServer_Success | saveSVServer_Failure | saveSVServer | getSV | getSV_Success
