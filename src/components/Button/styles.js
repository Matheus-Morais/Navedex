import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.TouchableOpacity`
    height: 40px;
    background: #212121;
    align-items: center;
    justify-content: center;

    border: 1px solid #212121;
`;

export const Text = styled.Text`
    color: ${props => props.Color};
    font-weight: bold;
    font-size: 14px;
`;
