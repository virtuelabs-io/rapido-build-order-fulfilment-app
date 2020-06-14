import { StyleSheet } from 'react-native';
import { Colors } from '../../commons/styles/colors';

export const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: "5%"
    },
    scannerContainer: {
        width: "100%",
        height: "70%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: Colors.codes.silver,
        borderStyle: 'dashed'
    },
    scanner: {
        width: "90%",
        height: "90%",
        borderRadius: 10
    },
    infoContainer: {
        width: "80%",
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Styles
