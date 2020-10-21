import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from '../../store/modules/auth/actions';
// import { Container } from './styles';

const Logout = () => {
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logout())
        return
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={handleLogout()}
                title="Logout"
            />
        </View>
    );
}

export default Logout;
