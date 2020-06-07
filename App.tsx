import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AppNavigation from './src/index';
import { enableScreens } from 'react-native-screens';

enableScreens()

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
        'cutive': require('./src/assets/fonts/Cutive-Regular.ttf'),
        'fugaz': require('./src/assets/fonts/FugazOne-Regular.ttf'),
        'laila-bold': require('./src/assets/fonts/Laila-Bold.ttf'),
        'laila-light': require('./src/assets/fonts/Laila-Light.ttf'),
        'laila-medium': require('./src/assets/fonts/Laila-Medium.ttf'),
        'laila': require('./src/assets/fonts/Laila-Regular.ttf'),
        'laila-semibold': require('./src/assets/fonts/Laila-SemiBold.ttf'),
        'lobster': require('./src/assets/fonts/Lobster-Regular.ttf'),
        'patua': require('./src/assets/fonts/PatuaOne-Regular.ttf'),
        'quantico-bold': require('./src/assets/fonts/Quantico-Bold.ttf'),
        'quantico-bold-italic': require('./src/assets/fonts/Quantico-BoldItalic.ttf'),
        'quantico-italic': require('./src/assets/fonts/Quantico-Italic.ttf'),
        'quantico': require('./src/assets/fonts/Quantico-Regular.ttf'),
        'aladin': require('./src/assets/fonts/Aladin-Regular.ttf'),
        'arima-madurai': require('./src/assets/fonts/ArimaMadurai-Regular.ttf'),
        'bellota': require('./src/assets/fonts/Bellota-Regular.ttf'),
        'berkshire-swash': require('./src/assets/fonts/BerkshireSwash-Regular.ttf'),
        'bevan': require('./src/assets/fonts/Bevan-Regular.ttf'),
        'biorhyme': require('./src/assets/fonts/BioRhyme-Regular.ttf'),
        'coming-soon': require('./src/assets/fonts/ComingSoon-Regular.ttf'),
        'copse': require('./src/assets/fonts/Copse-Regular.ttf'),
        'crafty-girls': require('./src/assets/fonts/CraftyGirls-Regular.ttf'),
        'eb-garamound': require('./src/assets/fonts/EBGaramond-Regular.ttf')
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
