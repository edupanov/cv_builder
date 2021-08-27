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
    logo: {
        width: 150,
        left: 0
    },
    contactWrapper: {
        top: 10,
    },
    contactTitle:{
        paddingBottom: 7
    },
    contactInfo: {
        fontSize: 10,
        paddingBottom: 7
    },
    name: {
        fontSize: 24,
        paddingBottom: 10

    },
    jobTitle: {
        fontSize: 16,

    }

});