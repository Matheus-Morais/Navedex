import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text'

export const Container = styled.View`
    height: 40px;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    border: 1px solid #424242;
`;

export const TextInputMaskPassForget = styled(TextInputMask).attrs({
    placeholderTextColor: '#9E9E9E',
})`
    flex: 1;
    font-size: 15px;
    margin-left: 10px;
    color: #9E9E9E;
`;
