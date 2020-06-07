import { Platform } from "react-native"
import { Colors } from './colors';
import Utils from '../utils/index';


export const StackStyleConstants = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : Colors.codes.white,
    },
    headerTintColor: Colors.secondary,
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: Utils.getFont()
    }
}
