import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Button from '../../../components/Button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Container = styled.ScrollView`
    background: #E5E5E5;
`;

export const ContainerImage = styled.View``;

export const Avatar = styled.Image`
    width: ${width}px;
    height: ${width}px;
`;

export const NaverItem = styled.View`
    margin: 16px;
`;

export const Title = styled.Text`
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;

    color: #212121;
`;

export const SubTitle = styled.Text`
    font-weight: ${props => props.isTitle ? '600' : 'normal'};
    font-size: 16px;
    line-height: 24px;

    color: #212121;
`;

export const ContainerButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const DeleteButton = styled(Button)`
    background: #fff;
    width: 45%;
`;

export const EditButton = styled(Button)`
    width: 45%;
`;
