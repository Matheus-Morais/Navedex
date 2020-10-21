import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.6);
`;

export const KeyboardContainer = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS === 'ios' ? 'padding' : null
})`
    flex: 1;
`;
