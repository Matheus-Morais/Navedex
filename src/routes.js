import React from 'react';
import { useDispatch } from 'react-redux';
import { Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

//Action para logout
import { logout } from './store/modules/auth/actions';
//Icon do menu
import Menu from './assets/menu.png';

const { Navigator, Screen } = createStackNavigator();
const { Navigator: NavigatorDrawer, Screen: ScreenDrawer } = createDrawerNavigator();

import SignIn from './pages/SignIn';

import Navers from './pages/App/router';

export default ({ isSignedIn = false }) => {
    const dispatch = useDispatch()

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

    function CustomDrawerContent(props) {
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    icon={({ focused, color, size }) =>
                        <Image style={{ width: 25, height: 20 }} source={Menu} />
                    }
                    label=""
                    style={{ marginBottom: Dimensions.get('window').height / 2.5 }}
                    onPress={() => { }}
                />
                <DrawerItemList labelStyle={{ fontWeight: '600' }} {...props} />
                <DrawerItem label="Sair" labelStyle={{ fontWeight: '600' }} onPress={() => dispatch(logout())} />
            </DrawerContentScrollView>
        );
    }

    return (

        isSignedIn ? (
            <NavigationContainer>
                <NavigatorDrawer
                    initialRouteName="Navers"
                    drawerStyle={{
                        backgroundColor: '#FAFAFA',
                    }}
                    drawerContent={props => <CustomDrawerContent {...props} />}
                >
                    <ScreenDrawer name="Navers" component={Navers} />
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
