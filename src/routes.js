import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import SignIn from './pages/SignIn';

export default ({ isSignedIn = false }) => {
    const stackNavigationOption = {
        headerTransparent: false,
        headerTintColor: "#000",
        headerTitleStyle: {
            fontWeight: "bold",
        },
        headerTitleAlign: "center",
        headerStyle: {
            backgroundColor: "#FFF"
        },
        headerLeftContainerStyle: {
            marginLeft: 20,
        }
    }

    //Opções para um screen sem Header
    const ScreenOptionNoHeader = {
        headerShown: false
    }

    return (
        <NavigationContainer>
            <Navigator screenOptions={stackNavigationOption}>
                <Screen
                    name="SignIn"
                    component={SignIn}
                    options={ScreenOptionNoHeader}
                />
            </Navigator>
        </NavigationContainer>
    )
}
