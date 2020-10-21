import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator()

import Navers from './Navers';
import Naver from './Naver';
import NewNaver from './NewNaver';


function NaversRouter() {
    const stackNavigationOption = {
        headerTransparent: false,
        // headerTintColor: "#000",
        // headerTitleStyle: {
        //     fontWeight: "bold",
        // },
        headerTitleAlign: "center",
        // headerStyle: {
        //     backgroundColor: "#FFF"
        // },
        // backButtonInCustomView: true,
    }

    return (
        <Navigator screenOptions={stackNavigationOption}>
            <Screen
                name="Navers"
                component={Navers}
            />
            <Screen
                name="Naver"
                component={Naver}
            />
            <Screen
                name="NewNaver"
                component={NewNaver}
            />
        </Navigator>
    )
}

export default NaversRouter;
