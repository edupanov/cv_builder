import {ResumeUrls} from "../../../../../urls/resumeUrls";
import {RequestSender} from "../../../../shared/services/requestSenderService/requestSender";
import {SignUpInterface} from "../../signUp/types/signUpInterface";

export const signUp = async (user: SignUpInterface) => {
    const fillUrl = `${ResumeUrls.BASE_URL}${ResumeUrls.SIGN_UP}`

    const result = await RequestSender.post(fillUrl, user)

    return result.json()
}

export const signIn = async (email: string, password: string) => {
    const fillUrl = `${ResumeUrls.BASE_URL}${ResumeUrls.SIGN_IN}`

    const result = await RequestSender.post(fillUrl, {email, password})

    return result.json()
}