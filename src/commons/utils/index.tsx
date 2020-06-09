import { Platform } from 'react-native';

const getTabTitleFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-ebold' : 'arima-madurai-ebold'
}

const getHeadingFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-ebold' : 'arima-madurai-ebold'
}

const getFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai' : 'arima-madurai'
}

const Utils = {
    getFontFamily: getFontFamily,
    getTabTitleFontFamily: getTabTitleFontFamily,
    getHeadingFontFamily: getHeadingFontFamily
}

export default Utils
