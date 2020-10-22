import React, { useState } from 'react';

import Modal from '../Modal';
import Message from '../Message'
import api from '../../services/api';
import Clear from '../../assets/clear.png';

import {
    Container,
    Content,
    ContainerHeader,
    ContainerClose,
    LabelTitle,
    Label,
    ContainerButtons,
    CancelButton,
    DeleteButton,
    Icon
} from './styles';

export default function Confirm({ visible, onRequestClose, idNaver }) {
    const [loading, setLoading] = useState(false)

    const [modalMessageVisible, setModalMessageVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState('Opps!')
    const [modalMessage, setModalMessage] = useState('Ocorreu um erro desconhecindo, tente novamente mais tarde.')

    async function handleDelete() {
        setLoading(true)
        try {
            await api.delete(`navers/${idNaver}`)
        } catch (error) {
            //Se der algum erro na api, retorna uma mensagem para tentar novamente mais tarde
            toggleModalMessageOpen()
            setLoading(false)
            return
        }
        onRequestClose(false)
        setLoading(false)
        return
    }

    function toggleModalMessageOpen() {
        setModalMessageVisible(true)
        return
    }

    //Função que fecha a modal
    function toggleModalMessageClose() {
        setModalMessageVisible(false)
        return
    }

    return (
        <Modal visible={visible} onRequestClose={onRequestClose}>
            <Container>
                <Content>
                    <ContainerHeader>
                        <LabelTitle>Excluir naver</LabelTitle>

                        <ContainerClose onPress={onRequestClose}>
                            <Icon source={Clear} />
                        </ContainerClose>
                    </ContainerHeader>
                    <Label>Tem certeza que deseja excluir este naver?</Label>

                    <ContainerButtons>
                        <CancelButton color={'#212121'} onPress={onRequestClose}>Cancelar</CancelButton>

                        <DeleteButton onPress={handleDelete} loading={loading}>Excluir</DeleteButton>
                    </ContainerButtons>
                </Content>
            </Container>
            <Message visible={modalMessageVisible} onRequestClose={toggleModalMessageClose} Title={modalTitle} Message={modalMessage} />
        </Modal>
    );
}

