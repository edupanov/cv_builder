import React from 'react';
import {Document, Image, Link, Page, PDFViewer, Text, View} from '@react-pdf/renderer';
import {useTypeSelector} from "../../../store/hooks/useTypeSelector";
import {styles} from "./style/pdfStyle";
import {EducationInterface, WebContactsInterface, WorkExperienceInterface} from "../createCV/types/cvInterface";
import {formatDate} from "../../../utils/utils";


const Pdf = () => {

    let state = useTypeSelector(state => state.resume.data)

    return (
        <PDFViewer style={{width: '100%', height: '100vh'}}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <div style={styles.container}>
                        <View style={styles.personalDetails}>
                            <div style={styles.leftPanel}>
                                {!state ? null : !state.personalDetails.logo ? null :
                                    <Image style={styles.logo} src={`${state.personalDetails.logo.imgPath}`}/>
                                }
                                <div style={styles.contactWrapper}>
                                    <Text style={styles.contactTitle}>Contacts</Text>
                                    <Text
                                        style={styles.contactInfo}>Phone: {!state ? '' : state.personalDetails.phone}</Text>
                                    <Text
                                        style={styles.contactInfo}>Email: {!state ? '' : state.personalDetails.email}</Text>
                                    <Text
                                        style={styles.contactInfo}>Home: {!state ? '' : `${state.personalDetails.country}, ${state.personalDetails.city}, ${state.personalDetails.address}, ${state.personalDetails.postalCode}`}</Text>
                                    <Text style={styles.webTitle}>Web & Social Links:</Text>
                                    {!state?.webContacts ? '' : state.webContacts.map((el: WebContactsInterface) => <div
                                        key={state.webContacts.length}><Link src={el.link}
                                                                             style={styles.webLink}>{el.link}</Link>
                                    </div>)}
                                    <Text style={styles.webTitle}>Skills: </Text>
                                    {!state?.skills ? '' : state.skills.webTechnologies.length === 0 ? null : <Text
                                        style={styles.webLink}>{`Web Technologies: ${state.skills.webTechnologies}`}</Text>}
                                    {!state?.skills ? '' : state.skills.stateManagement.length === 0 ? null : <Text
                                        style={styles.webLink}>{`State Management: ${state.skills.stateManagement}`}</Text>}
                                    {!state?.skills ? '' : state.skills.programmingLanguages.length === 0 ? null : <Text
                                        style={styles.webLink}>{`Programming Languages: ${state.skills.programmingLanguages}`}</Text>}
                                    {!state?.skills ? '' : state.skills.dbms.length === 0 ? null :
                                        <Text style={styles.webLink}>{`DBMS: ${state.skills.dbms}`}</Text>}
                                    {!state?.skills ? '' : state.skills.testing.length === 0 ? null :
                                        <Text style={styles.webLink}>{`Testing: ${state.skills.testing}`}</Text>}
                                    {!state?.skills ? '' : state.skills.ide.length === 0 ? null :
                                        <Text style={styles.webLink}>{`IDE: ${state.skills.ide}`}</Text>}
                                    {!state?.skills ? '' : state.skills.vcs.length === 0 ? null :
                                        <Text style={styles.webLink}>{`VCS: ${state.skills.vcs}`}</Text>}
                                    {!state?.skills ? '' : state.skills.frameworks.length === 0 ? null :
                                        <Text style={styles.webLink}>{`Frameworks: ${state.skills.frameworks}`}</Text>}
                                    {!state?.skills ? '' : state.skills.other.length === 0 ? null :
                                        <Text style={styles.webLink}>{`Other skills: ${state.skills.other}`}</Text>}

                                </div>
                            </div>

                            <div style={styles.rightPanel}>
                                <Text
                                    style={styles.name}>{!state ? '' : `${state.personalDetails.firstName} ${state.personalDetails.lastName}`}</Text>
                                <Text
                                    style={styles.jobTitle}>{!state ? '' : state.personalDetails.wantedJobTitle}</Text>
                                <Text style={styles.professionalSummaryTitle}>Professional Summary:</Text>
                                {!state?.professionalSummary ? '' : state.professionalSummary.length === 0 ? null :
                                    <Text
                                        style={styles.professionalSummaryText}>{state.professionalSummary!.info}</Text>}
                                <Text style={styles.professionalSummaryTitle}>Work Experience:</Text>
                                {!state?.workExperience ? '' : state.workExperience.length === 0 ? null : state.workExperience.map((el: WorkExperienceInterface) =>
                                    <div
                                        key={state.workExperience.length}><Text
                                        style={styles.workExperiencePeriod}>{`${formatDate(el.dateFrom, 'DD.MM.yyyy')} - ${formatDate(el.dateTo, 'DD.MM.yyyy')}`}</Text><Text
                                        style={styles.workExperienceText}>Company: {el.company}</Text><Text
                                        style={styles.workExperienceText}>Position: {el.position}</Text><Text
                                        style={styles.workExperienceText}>Description: {el.description}</Text></div>)}
                                <Text style={styles.professionalSummaryTitle}>Education:</Text>
                                {!state?.education ? '' : state.education.length === 0 ? null : state.education.map((el: EducationInterface) =>
                                    <div
                                        key={state.education.length}><Text
                                        style={styles.workExperiencePeriod}>{`B.C.${formatDate(el.dateFrom, 'DD.MM.yyyy')} - B.C.${formatDate(el.dateTo, 'DD.MM.yyyy')}`}</Text><Text
                                        style={styles.workExperienceText}>Educational
                                        Institution: {el.institution}</Text><Text
                                        style={styles.workExperienceText}>Academic Degree: {el.degree}</Text></div>)}
                                <Text style={styles.professionalSummaryTitle}>Hobbies:</Text>
                                {!state?.hobbies ? '' : state.hobbies.length === 0 ? null :
                                    <Text style={styles.professionalSummaryText}>{state.hobbies!.info}</Text>}

                            </div>
                        </View>
                    </div>
                </Page>
            </Document>
        </PDFViewer>
    );
};
export default Pdf;
