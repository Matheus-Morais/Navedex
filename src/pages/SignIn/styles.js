import { Platform, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Container = styled(Background)`
`;

export const KeyboardContainer = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.os === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    height: ${height * 0.25}px;
    width: ${width * 0.5}px;
`;

export const Form = styled.View`
    width: ${width}px;
    height: ${height * 0.6}px;
`;

export const ItemForm = styled.View`
    margin: ${height * 0.035}px 16px 0 16px;
`;

export const Label = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

    display: flex;
    align-items: center;
`;

export const FormInput = styled(Input)`
`;

export const SubmitButton = styled(Button)`
`;
