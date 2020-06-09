import { Platform } from 'react-native';

const getTabTitleFont = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-ebold' : 'arima-madurai-ebold'
}

const getHeadingFont = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-ebold' : 'arima-madurai-ebold'
}

const getFont = (): string => {
    return Platform.OS === "android" ? 'arima-madurai' : 'arima-madurai'
}

const Utils = {
    getFont: getFont,
    getTabTitleFont: getTabTitleFont,
    getHeadingFont: getHeadingFont
}

export default Utils
