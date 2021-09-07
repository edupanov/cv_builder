import {ResumeUrls} from "../../../../../../urls/resumeUrls";
import {RequestSender} from "../../../../../shared/services/requestSenderService/requestSender";
import {CvInterface} from "../../types/cvInterface";


export const setResume = async (resume: CvInterface) => {
    const fullUrl = `${ResumeUrls.BASE_URL}${ResumeUrls.SAVE_RESUME_URL}`

    return await RequestSender.post(fullUrl, resume)
}

export const getResume = async ():Promise<any> => {
    const fullUrl = `${ResumeUrls.BASE_URL}${ResumeUrls.GET_RESUME_URL}`

    return await RequestSender.get(fullUrl)
}