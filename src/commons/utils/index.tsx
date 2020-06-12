import { Platform } from 'react-native';

const getTabTitleFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-ebold' : 'arima-madurai-ebold'
}

const getHeadingFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-ebold' : 'arima-madurai-ebold'
}

const getTitleFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-bold' : 'arima-madurai-bold'
}

const getThinFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-thin' : 'arima-madurai-thin'
}

const getFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai' : 'arima-madurai'
}

const Utils = {
    getFontFamily: getFontFamily,
    getTabTitleFontFamily: getTabTitleFontFamily,
    getHeadingFontFamily: getHeadingFontFamily,
    getTitleFontFamily: getTitleFontFamily,
    getThinFontFamily: getThinFontFamily
}

export default Utils
