import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropsTypes from 'prop-types';

import {
    Container,
    Text
} from './styles';

export default function Button({ children, loading, color = '#fff', ...rest }) {
    return (
        <Container {...rest}>
            {loading ? (
                <ActivityIndicator size="small" color={color} />
            ) : (
                    <Text Color={color}>{children}</Text>
                )}
        </Container>
    );
}

Button.PropsTypes = {
    children: PropsTypes.string.isRequired,
    loading: PropsTypes.bool,
};

Button.defaultProps = {
    loading: false,
};
