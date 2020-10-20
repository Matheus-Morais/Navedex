import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropsTypes from 'prop-types';

import {
    Container,
    ContainerButtonArrowRigth,
    Text
} from './styles';

export default function Button({ children, loading, ...rest }) {
    return (
        <Container {...rest}>
            {loading ? (
                <ActivityIndicator size="small" color="#FFF" />
            ) : (
                    <Text>{children}</Text>
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
