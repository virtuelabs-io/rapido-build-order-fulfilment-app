import { StyleSheet } from 'react-native';
import { Colors } from '../../commons/styles/colors';

export const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: "5%",
        backgroundColor: Colors.secondary,
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    headingContainer: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },
    datePickerContianer: {
        paddingVertical: 10
    }
})

export default Styles
