import { Platform } from "react-native"
import { Colors } from './colors';
import Utils from '../utils/index';
import { BottomTabBarOptions } from "@react-navigation/bottom-tabs";
import { StackNavigationOptions } from "@react-navigation/stack";
import Constants from '../constants/index';



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

export const getStackStyles = (title: string): StackNavigationOptions => {
    return {
        title: title,
        headerStyle: StackStyleConstants.headerStyle,
        headerTintColor: StackStyleConstants.headerTintColor,
        headerTitleStyle: StackStyleConstants.headerTitleStyle,
        headerBackTitleStyle: StackStyleConstants.headerBackTitleStyle
    }
}

export const getTabIcon = (route: string) => {
    const lsettings = Constants.NAV.stackNames
    var iconName: string = Constants.DEFAULT_ICON

    if (route == lsettings.dashboardStack.name) {
        iconName = lsettings.dashboardStack.icon
    }
    if (route == lsettings.ordersStack.name) {
        iconName = lsettings.ordersStack.icon
    }
    if (route == lsettings.settingsStack.name) {
        iconName = lsettings.settingsStack.icon
    }
    return iconName
}

export const getTabBarStyles = (): BottomTabBarOptions => {
    return {
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.inActive,
        showLabel: true,
        labelStyle: {
            fontFamily: Utils.getFontFamily()
        }
    }
}

export const getTabLabel = (route: string) => {
    const lsettings = Constants.NAV.stackNames
    var tabLabel: string = "Tab"

    if (route == lsettings.dashboardStack.name) {
        tabLabel = lsettings.dashboardStack.displayText
    }
    if (route == lsettings.ordersStack.name) {
        tabLabel = lsettings.ordersStack.displayText
    }
    if (route == lsettings.settingsStack.name) {
        tabLabel = lsettings.settingsStack.displayText
    }
    return tabLabel
}
