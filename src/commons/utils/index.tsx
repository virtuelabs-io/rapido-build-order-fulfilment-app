import { Platform } from 'react-native';

const getFont = (): string => {
    return Platform.OS === "android" ? 'open-sans-bold' : 'open-sans-bold'
}

const Utils = {
    getFont: getFont
}

export default Utils
