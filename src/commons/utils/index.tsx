import { Platform } from 'react-native';
import { GOOD, WARNING, SEVERE, INFO, ACTUAL, PERCENTAGE } from '../../store/analytics/types';
import { Colors } from '../styles/colors';

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

const getMediumFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-medium' : 'arima-madurai-medium'
}

const getLightFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-light' : 'arima-madurai-light'
}

const getELightFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-elight' : 'arima-madurai-elight'
}

const fetchIconForInsight = (insightType: typeof GOOD | typeof WARNING | typeof INFO | typeof SEVERE): string => {
    if (insightType === GOOD) {
        return "totop"
    }

    if (insightType === SEVERE) {
        return "disconnect"
    }

    if (insightType === WARNING) {
        return "warning"
    }

    if (insightType === INFO) {
        return "bulb1"
    }
    return "bulb1"
}

const fetchPillColor = (insightType: typeof GOOD | typeof WARNING | typeof INFO | typeof SEVERE): string => {
    if (insightType === GOOD) {
        return Colors.codes.green
    }

    if (insightType === SEVERE) {
        return Colors.danger
    }

    if (insightType === WARNING) {
        return Colors.warning
    }

    if (insightType === INFO) {
        return Colors.success
    }
    return Colors.success
}

const fetchFormatedValue = (units: typeof ACTUAL | typeof PERCENTAGE, value: number): string => {
    if (units === PERCENTAGE) {
        return [Math.round(value * 100).toString() , "%"].join("")
    }
    return value.toString()
}

const Utils = {
    getFontFamily: getFontFamily,
    getTabTitleFontFamily: getTabTitleFontFamily,
    getHeadingFontFamily: getHeadingFontFamily,
    getTitleFontFamily: getTitleFontFamily,
    getThinFontFamily: getThinFontFamily,
    getMediumFontFamily: getMediumFontFamily,
    getLightFontFamily: getLightFontFamily,
    getELightFontFamily: getELightFontFamily,
    fetchPillColor: fetchPillColor,
    fetchIconForInsight: fetchIconForInsight,
    fetchFormatedValue: fetchFormatedValue
}

export default Utils
