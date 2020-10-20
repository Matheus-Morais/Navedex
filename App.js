import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler'

import App from './src/app';
import './src/utils/ReactotronConfig'

export default function Index() {
    return (
        <>
            <App />
            <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />
        </>

    );
}
