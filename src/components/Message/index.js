import React from 'react';

import Modal from '../Modal';
import Clear from '../../assets/clear.png';

import {
    Container,
    Content,
    ContainerHeader,
    ContainerClose,
    LabelTitle,
    Label,
    Icon
} from './styles';

export default function Message({ visible, onRequestClose, Title, Message }) {
    return (
        <Modal visible={visible} onRequestClose={onRequestClose}>
            <Container>
                <Content>
                    <ContainerHeader>
                        <LabelTitle>{Title}</LabelTitle>

                        <ContainerClose onPress={onRequestClose}>
                            <Icon source={Clear} />
                        </ContainerClose>
                    </ContainerHeader>
                    <Label>{Message}</Label>
                </Content>
            </Container>
        </Modal>
    );
}

