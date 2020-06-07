import { StyleSheet } from 'react-native';
import { Colors } from '../../commons/styles/colors';


export const Styles = StyleSheet.create({
  screen: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
        backgroundColor: Colors.codes.white
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: 0.5,
        padding: 15,
        borderRadius: 10
    },
    textStyle: {
        marginVertical: 5,
        fontSize: 20
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: 0.5,
        marginHorizontal: 60,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: Colors.secondary,
        marginBottom: 35
    },
    buttonTextStyle: {
        fontSize: 30,
        color: Colors.codes.white
    },
})

export default Styles
