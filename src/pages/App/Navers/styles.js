import { Platform, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Background from '../../components/Background';
import Button from '../../components/Button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Container = styled.View`

`;

export const Logo = styled.Image`
    height: ${height * 0.25}px;
    width: ${width * 0.5}px;
`;
