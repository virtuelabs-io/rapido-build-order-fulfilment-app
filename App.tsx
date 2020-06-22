import React, { useState } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AppNavigation from './src/index';
import { enableScreens } from 'react-native-screens';
import { store } from './src/store'
import { CoreReduxInitialState } from './src/store/core/data';
import Constants from './src/commons/constants/index';

enableScreens()

const fetchFonts = () => {
    return Font.loadAsync(Constants.FONTS);
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if(!String.prototype.replaceAll){
        String.prototype.replaceAll = function (search, replacement) {
            return String.prototype.split(search).join(replacement)
        };
    }
    
    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
            />
        );
    }

    return (
        <Provider store={store}>
            <AppNavigation core={CoreReduxInitialState} />
        </Provider>
    );
}
