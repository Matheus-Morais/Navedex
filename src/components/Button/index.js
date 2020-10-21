import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropsTypes from 'prop-types';

import EditIcon from '../../assets/Edit-Icon-White.png';
import DeleteIcon from '../../assets/Delete-Icon.png';

import {
    Container,
    Text,
    ContainerIconText,
    ContainerIcon,
    Icon
} from './styles';

export default function Button({ children, loading, color = '#fff', icon = null, ...rest }) {
    return (
        <Container {...rest}>
            {loading ? (
                <ActivityIndicator size="small" color={color} />
            ) : (
                    icon ?
                        <ContainerIconText>
                            <ContainerIcon>
                                {icon == 'delete' ?
                                    <Icon source={DeleteIcon} resizeMode="contain" /> :
                                    <Icon source={EditIcon} resizeMode="contain" />
                                }
                            </ContainerIcon>
                            <Text Color={color}>{children}</Text>
                        </ContainerIconText> :
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
