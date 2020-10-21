import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../../components/Input';
import InputMasked from '../../../components/InputMasked';
import Button from '../../../components/Button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Container = styled.ScrollView`
    background: #E5E5E5;
`;

export const ContainerTitle = styled.View`
    margin: ${height * 0.06}px 0px ${height * 0.02}px 0px;
`;

export const Title = styled.Text`
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: #212121;
`;

export const Form = styled.View`
    width: ${width}px;
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

export const FormInputMasked = styled(InputMasked)`
`;

export const SubmitButton = styled(Button)`
`;
