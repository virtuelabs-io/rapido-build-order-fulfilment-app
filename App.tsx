import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AppNavigation from './src/index';
import { enableScreens } from 'react-native-screens';

enableScreens()

const fetchFonts = () => {
    return Font.loadAsync({
        'laila-bold': require('./src/assets/fonts/Laila-Bold.ttf'),
        'laila-light': require('./src/assets/fonts/Laila-Light.ttf'),
        'laila-medium': require('./src/assets/fonts/Laila-Medium.ttf'),
        'laila': require('./src/assets/fonts/Laila-Regular.ttf'),
        'laila-semibold': require('./src/assets/fonts/Laila-SemiBold.ttf'),
        'quantico-bold': require('./src/assets/fonts/Quantico-Bold.ttf'),
        'quantico-bold-italic': require('./src/assets/fonts/Quantico-BoldItalic.ttf'),
        'quantico-italic': require('./src/assets/fonts/Quantico-Italic.ttf'),
        'quantico': require('./src/assets/fonts/Quantico-Regular.ttf'),
        'arima-madurai': require('./src/assets/fonts/ArimaMadurai-Regular.ttf'),
        'arima-madurai-black': require('./src/assets/fonts/ArimaMadurai-Black.ttf'),
        'arima-madurai-bold': require('./src/assets/fonts/ArimaMadurai-Bold.ttf'),
        'arima-madurai-ebold': require('./src/assets/fonts/ArimaMadurai-ExtraBold.ttf'),
        'arima-madurai-elight': require('./src/assets/fonts/ArimaMadurai-ExtraLight.ttf'),
        'arima-madurai-light': require('./src/assets/fonts/ArimaMadurai-Light.ttf'),
        'arima-madurai-medium': require('./src/assets/fonts/ArimaMadurai-Medium.ttf'),
        'arima-madurai-thin': require('./src/assets/fonts/ArimaMadurai-Thin.ttf')
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
            />
        );
    }

    return <AppNavigation isSignedIn={false} /> ;
}
