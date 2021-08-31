export interface LogoInterface {
    name: string
    imgPath: string
    img: string
}

export interface PersonalDetailsInterface {
    firstName: string
    lastName: string
    wantedJobTitle: string
    address: string
    birthDay: string
    city: string
    country: string
    email: string
    phone: string
    postalCode: string
    logo: LogoInterface
}

export interface ProfessionalSummaryInterface {
    info: string
}

export interface WorkExperienceInterface {
    dateFrom: string
    dateTo: string
    company: string
    position: string
    description: string
}
export interface EducationInterface {
    dateFrom: string
    dateTo: string
    institution: string
    degree: string
}
export interface WebContactsInterface {
    link: string
}

export interface CvInterface {
    personalDetails?: PersonalDetailsInterface
    professionalSummary?: ProfessionalSummaryInterface
    workExperience?: Array<WorkExperienceInterface>
    education?: Array<EducationInterface>
    webContacts?: Array<WebContactsInterface>
    skills?: Array<string>

}
