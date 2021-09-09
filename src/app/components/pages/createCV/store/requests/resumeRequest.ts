import {ResumeUrls} from "../../../../../../urls/resumeUrls";
import {RequestSender} from "../../../../../shared/services/requestSenderService/requestSender";
import {CvInterface} from "../../types/cvInterface";


export const setResume = async (resume: CvInterface, userId: string) => {
    const fullUrl = `${ResumeUrls.BASE_URL}${ResumeUrls.SAVE_RESUME_URL}`

    return await RequestSender.post(fullUrl, {resume, userId})
}

export const getResume = async (email: string) => {
    const fullUrl = `${ResumeUrls.BASE_URL}${ResumeUrls.GET_RESUME_URL}`
    const result = await RequestSender.post(fullUrl, {email})

    return result.json()
}