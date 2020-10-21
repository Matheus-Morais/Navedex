import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const { Navigator, Screen } = createStackNavigator();
const { Navigator: NavigatorDrawer, Screen: ScreenDrawer } = createDrawerNavigator();

import SignIn from './pages/SignIn';

import Navers from './pages/App/router';
import Logout from './pages/Logout';

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

        isSignedIn ? (
            <NavigationContainer>
                <NavigatorDrawer initialRouteName="Navers">
                    <ScreenDrawer name="Navers" component={Navers} />
                    <ScreenDrawer name="Logout" component={Logout} />
                </NavigatorDrawer>
            </NavigationContainer>
        ) : (
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
    )
}
