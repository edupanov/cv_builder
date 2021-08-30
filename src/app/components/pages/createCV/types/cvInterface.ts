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

export interface EmploymentHistoryInterface {
    dateFrom: string
    dateTo: string
    info: string
}

export interface CvInterface {
    personalDetails?: PersonalDetailsInterface
    professionalSummary?: ProfessionalSummaryInterface
    employmentHistory?: Array<EmploymentHistoryInterface>

}
