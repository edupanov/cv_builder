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
                                {!state ? null :
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
                                    {!state ? '' : state.webContacts.map((el: WebContactsInterface) => <div
                                        key={state.webContacts.length}><Link src={el.link} style={styles.webLink}>{el.link}</Link></div>)}

                                </div>
                            </div>

                            <div style={styles.rightPanel}>
                                <Text
                                    style={styles.name}>{!state ? '' : `${state.personalDetails.firstName} ${state.personalDetails.lastName}`}</Text>
                                <Text
                                    style={styles.jobTitle}>{!state ? '' : state.personalDetails.wantedJobTitle}</Text>
                                <Text style={styles.professionalSummaryTitle}>Professional Summary:</Text>
                                <Text
                                    style={styles.professionalSummaryText}>{!state ? '' : state.professionalSummary.info}</Text>
                                <Text style={styles.professionalSummaryTitle}>Work Experience:</Text>
                                {!state ? '' : state.workExperience.map((el: WorkExperienceInterface) => <div
                                    key={state.workExperience.length}><Text
                                    style={styles.professionalSummaryText}>{`${formatDate(el.dateFrom, 'DD.MM.yyyy')} - ${formatDate(el.dateTo, 'DD.MM.yyyy')}`}</Text><Text
                                    style={styles.workExperienceText}>Company: {el.company}</Text><Text
                                    style={styles.workExperienceText}>Position: {el.position}</Text><Text
                                    style={styles.workExperienceText}>Description: {el.description}</Text></div>)}
                                <Text style={styles.professionalSummaryTitle}>Education:</Text>
                                {!state ? '' : state.education.map((el: EducationInterface) => <div
                                    key={state.education.length}><Text
                                    style={styles.professionalSummaryText}>{`B.C.${formatDate(el.dateFrom, 'DD.MM.yyyy')} - B.C.${formatDate(el.dateTo, 'DD.MM.yyyy')}`}</Text><Text
                                    style={styles.workExperienceText}>Educational
                                    Institution: {el.institution}</Text><Text
                                    style={styles.workExperienceText}>Academic Degree: {el.degree}</Text></div>)}
                            </div>
                        </View>
                    </div>
                </Page>
            </Document>
        </PDFViewer>
    );
};
export default Pdf;
