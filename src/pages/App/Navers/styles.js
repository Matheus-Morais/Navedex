import { Platform, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Background from '../../../components/Background';
import Button from '../../../components/Button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Container = styled(Background)`
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;

    justify-content: space-around;
    align-items: center;

    margin: 18px;
`;

export const ContainerTitle = styled.View`
    width: 50%;
`;

export const Title = styled.Text`
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    /* identical to box height, or 145% */

    display: flex;
    align-items: center;
    color: #212121;
`;

export const AddButton = styled(Button)`
    width: 50%;
`;

export const Logo = styled.Image`
    height: ${height * 0.25}px;
    width: ${width * 0.5}px;
`;
