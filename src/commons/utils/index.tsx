import { Platform } from 'react-native';

const getFont = (): string => {
    return Platform.OS === "android" ? 'arima-madurai' : 'arima-madurai'
}

const Utils = {
    getFont: getFont
}

export default Utils
