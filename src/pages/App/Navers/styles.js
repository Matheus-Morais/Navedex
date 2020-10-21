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

export const ContainerLoading = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Loading = styled.ActivityIndicator``;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    numColumns: 2,
})`
    margin-right: 9px;
    margin-left: 9px;
`;

export const Naver = styled.View`
    margin-top: 18px;
    margin-bottom: 18px;

    margin-right: 9px;
    margin-left: 9px;
`;

export const ContainerImage = styled.View`
    height: ${height * 0.22}px;
    width: ${height * 0.22}px;
`;

export const Avatar = styled.Image`
    height: ${height * 0.22}px;
    width: ${height * 0.22}px;
`;

export const Label = styled.Text`
    font-weight: ${props => props.isBold ? 'bold' : 'normal'};
    font-size: 14px;
    line-height: 20px;

    color: #212121;
`;

export const ContainerOptions = styled.View`
    margin-top: 5px;
    flex-direction: row;
`;

export const Touchable = styled.TouchableOpacity`
    margin-right: 5px;
`;

export const Icon = styled.Image`
    height: 25px;
    width: 25px;
`;
