import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler'

import './src/utils/ReactotronConfig'
import { store, persistor } from './src/store';
import App from './src/app';

export default function Index() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />
                <App />
            </PersistGate>
        </Provider>

    );
}
