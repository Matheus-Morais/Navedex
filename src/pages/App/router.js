import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator()

import Navers from './Navers';
import Naver from './Naver';
import NewNaver from './NewNaver';

import Logo from '../../assets/Logo.png';
import Menu from '../../assets/menu.png';
import Arrow from '../../assets/arrow_back_ios.png';

function NaversRouter() {
    const stackNavigationOption = {
        headerTransparent: false,
        headerTitleAlign: "center",
        headerStyle: {
            backgroundColor: "#E5E5E5"
        },
        headerLeftContainerStyle: {
            marginLeft: 20,
        },
        headerTitle: () => (
            <Image style={{ width: 125, height: 32 }} source={Logo} />
        ),
    }

    return (
        <Navigator screenOptions={stackNavigationOption}>
            <Screen
                name="Navers"
                component={Navers}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
                            <Image style={{ width: 25, height: 20 }} source={Menu} />
                        </TouchableOpacity>
                    )
                })}
            />
            <Screen
                name="Naver"
                component={Naver}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                            <Image style={{ width: 25, height: 20 }} source={Arrow} />
                        </TouchableOpacity>
                    )
                })}
            />
            <Screen
                name="NewNaver"
                component={NewNaver}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                            <Image style={{ width: 25, height: 20 }} source={Arrow} />
                        </TouchableOpacity>
                    )
                })}
            />
        </Navigator>
    )
}

export default NaversRouter;
