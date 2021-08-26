export interface PersonalDetailsInterface {
    'First Name': string
    'Last Name': string
    'Wanted Job Title': string
    'address': string
    'birthDay': string
    'city': string
    'country': string
    'email': string
    'phone': string
    'postal code': string
}
export interface ProfessionalSummaryInterface {
    info: string
}

export interface CvInterface {
    personalDetails?: PersonalDetailsInterface
    professionalSummary?: ProfessionalSummaryInterface

}
