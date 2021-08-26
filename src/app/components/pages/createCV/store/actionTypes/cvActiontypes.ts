import {CvInterface} from "../../types/cvInterface";

export interface CvStateInterface {
    data: CvInterface | null
}

export enum CvActionTypes {
    SAVE_CV = '[Save CV] Save CV',
}

interface saveSV {
    type: CvActionTypes.SAVE_CV
    payload: CvInterface
}

export type cvActionType = saveSV
