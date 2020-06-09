import { StyleSheet } from 'react-native';
import { Colors } from '../../commons/styles/colors';
import Utils from '../../commons/utils/index';
import Constants from '../../commons/constants/index';


export const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingTop: 10
    },
    cardContainer: {
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
        fontFamily: Utils.getHeadingFontFamily(),
        fontSize: 36
    },
    phoneNumberContainer: {
        paddingVertical: 10
    },
    phoneNumberInputContainer: {
        flexDirection: 'row',
    },
    picker: {
        height: 200,
        width: "100%",
        alignSelf: 'stretch'
    },
    inputsContainer: {
        // paddingVertical: 10,
        alignSelf: 'stretch'
    },
    generalTextInputContainer: {
        paddingVertical: 10,
        alignSelf: 'stretch',
    },
    generalTextInput: {
        fontFamily: Utils.getFontFamily(),
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: "100%",
        textAlign: 'left',
        fontSize: 20
    },
    phoneInput: {
        fontFamily: Utils.getFontFamily(),
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: "80%",
        textAlign: 'left',
        fontSize: 20
    },
    dialCodeInput: {
        fontFamily: Utils.getFontFamily(),
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: "20%",
        textAlign: 'left',
        fontSize: 20,
        color: Colors.palePrimary
    },
    button: {
        marginVertical: 10,
        paddingVertical: 7,
        paddingHorizontal: "25%",
        backgroundColor: Colors.primary,
        width: "100%",
        borderRadius: 5
    },
    buttonTextStyle: {
        fontSize: 22,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: Utils.getFontFamily(),
    },
    testTextStyle: {
        marginVertical: 5,
        fontSize: 20,
        fontFamily: Utils.getFontFamily(),
    },
    inputHelpText: {
        fontFamily: Utils.getFontFamily(),
        color: Colors.codes.grayTextLight
    },
    forgotPasswordContainer: {
        padding: 5
    },
    generalText: {
        fontFamily: Utils.getFontFamily(),
        fontSize: 18
    }
})

export default Styles
