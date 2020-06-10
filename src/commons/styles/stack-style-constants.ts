import { Platform } from "react-native"
import { Colors } from './colors';
import Utils from '../utils/index';


export const StackStyleConstants = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : Colors.codes.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.codes.grayLighter,
        shadowColor: Colors.codes.black,
    },
    headerTintColor: Colors.primary,
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: Utils.getTabTitleFontFamily(),
    },
    headerBackTitleStyle: {
        fontFamily: Utils.getTabTitleFontFamily(),
    }
}

export const getStackStyles = (title: string) => {
    return {
        title: title,
        headerStyle: StackStyleConstants.headerStyle,
        headerTintColor: StackStyleConstants.headerTintColor,
        headerTitleStyle: StackStyleConstants.headerTitleStyle,
        headerBackTitleStyle: StackStyleConstants.headerBackTitleStyle
    }
}
