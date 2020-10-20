import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import SignIn from './pages/SignIn';

import Home from './pages/Home';

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
            {isSignedIn ? (
                <Navigator screenOptions={stackNavigationOption}>
                    <Screen
                        name="Home"
                        component={Home}
                        options={ScreenOptionNoHeader}
                    />

                </Navigator>
            ) : (
                    <Navigator screenOptions={stackNavigationOption}>
                        <Screen
                            name="SignIn"
                            component={SignIn}
                            options={ScreenOptionNoHeader}
                        />
                    </Navigator>
                )
            }

        </NavigationContainer>
    )
}
