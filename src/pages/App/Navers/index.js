import React from 'react';
import { View, Text } from 'react-native';

import {
    Container,
    Header,
    ContainerTitle,
    Title,
    AddButton,
} from './styles';

const Navers = () => {
    return (
        <Container>
            <Header>
                <ContainerTitle>
                    <Title>Navers</Title>
                </ContainerTitle>

                <AddButton onPress={() => { }}>Adicionar naver</AddButton>
            </Header>
        </Container>
    );
}

export default Navers;
