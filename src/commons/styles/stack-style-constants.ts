import { Platform } from "react-native"
import { Colors } from './colors';
import Utils from '../utils/index';


export const StackStyleConstants = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : Colors.codes.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.codes.grayLighter,
        shadowColor: Colors.codes.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 0.23,
        elevation: 4
    },
    headerTintColor: Colors.secondary,
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: Utils.getFont(),
    },
    headerBackTitleStyle: {
        fontFamily: Utils.getFont(),
    }
}
