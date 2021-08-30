import React from 'react';
import {Document, Image, Page, PDFViewer, Text, View} from '@react-pdf/renderer';
import {useTypeSelector} from "../../../store/hooks/useTypeSelector";
import {styles} from "./style/pdfStyle";


const Pdf = () => {
    let state = useTypeSelector(state => state.resume.data)
    return (
        <PDFViewer style={{width: '100%', height: '100vh'}}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <div style={styles.container}>
                        <View style={styles.personalDetails}>
                            <div>
                                {!state ? null :
                                    <Image style={styles.logo} src={`${state.personalDetails.logo.imgPath}`}/>
                                }
                                <div style={styles.contactWrapper}>
                                    <Text style={styles.contactTitle}>Contacts</Text>
                                    <Text style={styles.contactInfo}>Phone: {!state ? '' : state.personalDetails.phone}</Text>
                                    <Text style={styles.contactInfo}>Email: {!state ? '' : state.personalDetails.email}</Text>
                                    <Text
                                        style={styles.contactInfo}>Home: {!state ? '' : `${state.personalDetails.country}, ${state.personalDetails.city}, ${state.personalDetails.address}, ${state.personalDetails.postalCode}`}</Text>
                                </div>
                            </div>

                            <div>
                                <Text
                                    style={styles.name}>{!state ? '' : `${state.personalDetails.firstName} ${state.personalDetails.lastName}`}</Text>
                                <Text
                                    style={styles.jobTitle}>{!state ? '' : state.personalDetails.wantedJobTitle}</Text>
                            </div>
                        </View>
                    </div>
                </Page>
            </Document>
        </PDFViewer>
    );
};
export default Pdf;
