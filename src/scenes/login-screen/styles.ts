import { StyleSheet } from 'react-native';
import { Colors } from '../../commons/styles/colors';
import Utils from '../../commons/utils/index';


export const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingTop: 10
    },
    loginContainer: {
        backgroundColor: Colors.secondary,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25,
        paddingHorizontal: "5%",
        borderColor: Colors.secondary,
        borderWidth: 0.5,
        borderRadius: 10,
        shadowColor: Colors.palePrimary,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 5,
        shadowOpacity: 0.4,
        elevation: 4
    },
    titleText: {
        fontFamily: Utils.getHeadingFont(),
        fontSize: 36
    },
    phoneNumberContainer: {
        flexDirection: 'row'
    },
    picker: {
        height: 200,
        width: "100%"
    },
    inputsContainer: {
        paddingVertical: 10,
        alignSelf: 'stretch'
    },
    generalTextInput: {
        fontFamily: Utils.getFont(),
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: "100%",
        textAlign: 'left',
        fontSize: 20,
        paddingVertical: 10,
        marginVertical: 10
    },
    phoneInput: {
        fontFamily: Utils.getFont(),
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: "80%",
        textAlign: 'left',
        fontSize: 20,
        paddingVertical: 10,
        marginVertical: 10
    },
    dialCodeInput: {
        fontFamily: Utils.getFont(),
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: "20%",
        textAlign: 'left',
        fontSize: 20,
        paddingVertical: 10,
        marginVertical: 10,
        color: Colors.palePrimary
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: "25%",
        backgroundColor: Colors.primary,
        width: "100%"
    },
    buttonTextStyle: {
        fontSize: 20,
        color: Colors.secondary,
        textAlign: 'center'
    },
    testTextStyle: {
        marginVertical: 5,
        fontSize: 20
    }
})

export default Styles
