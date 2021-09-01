import {StyleSheet} from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        width: '100%',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    personalDetails: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    leftPanel: {
        width: 200
    },

    logo: {
        width: 200,
        left: 0
    },
    contactWrapper: {
        top: 10,
    },
    contactTitle: {
        paddingBottom: 7
    },
    contactInfo: {
        fontSize: 10,
        paddingBottom: 7
    },
    rightPanel: {
        borderLeft: '1px solid black',
        marginLeft: 10,
        height: '98vh'
    },
    name: {
        fontSize: 24,
        paddingBottom: 10,
        marginLeft: 100

    },
    jobTitle: {
        fontSize: 16,
        marginLeft: 100,
    },
    professionalSummaryTitle: {
        margin: '10px 0 0 20px',
        fontSize: 14,
        borderBottom: '1px solid black'
    },
    professionalSummaryText: {
        margin: '7px 0 0 20px',
        width: 320,
        fontSize: 12
    },

    workExperienceText: {
        marginLeft: 20,
        width: 320,
        fontSize: 12
    },

    workExperiencePeriod: {
        margin: '10px 0 3px 20px',
        fontSize: 14,
        fontWeight: 'bold',
    },

    webTitle: {
        margin: '10px 0 5px',
        fontSize: 16
    },
    webLink: {
        fontSize: 12
    }

});
