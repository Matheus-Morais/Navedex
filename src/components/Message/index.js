import React from 'react';

import Modal from '../Modal';

import {
    Container,
    Content,
    ContainerHeader,
    ContainerClose,
    LabelTitle,
    Label,
} from './styles';

export default function Message({ visible, onRequestClose, Title, Message }) {
    return (
        <Modal visible={visible} onRequestClose={onRequestClose}>
            <Container>
                <Content>
                    <ContainerHeader>
                        <LabelTitle>{Title}</LabelTitle>

                        <ContainerClose onPress={onRequestClose}>
                            <LabelTitle>X</LabelTitle>
                        </ContainerClose>
                    </ContainerHeader>
                    <Label>{Message}</Label>
                </Content>
            </Container>
        </Modal>
    );
}

