import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import api from '../../../services/api';
import EditIcon from '../../../assets/Edit-Icon.png';
import DeleteIcon from '../../../assets/Delete-Icon.png';

import Message from '../../../components/Message';
import Confirm from '../../../components/Confirm';

import {
    Container,
    ContainerLoading,
    Loading,
    Header,
    ContainerTitle,
    Title,
    AddButton,
    List,
    Naver,
    ContainerImage,
    Avatar,
    Label,
    ContainerOptions,
    Touchable,
    Icon
} from './styles';

export default function Navers({ navigation }) {
    const [loading, setLoading] = useState(true)

    const [modalConfirmVisible, setModalConfirmVisible] = useState(false)
    const [idNaver, setIdNaver] = useState('')

    const [modalMessageVisible, setModalMessageVisible] = useState(false)

    const [navers, setNavers] = useState([])

    //Função que busca os Navers
    async function getNavers() {
        setLoading(true)

        let response
        try {
            response = await api.get('/navers')
        } catch (error) {
            setLoading(false)
            return
        }
        setLoading(false)
        setNavers(response.data)
        return
    }

    //Função que abre a modal de confirmação
    function toggleModalConfirmOpen(id) {
        setIdNaver(id)
        setModalConfirmVisible(true)
        return
    }

    //Função que fecha a modal de confirmação
    function toggleModalConfirmClose(isNotDeleted = true) {
        setModalConfirmVisible(false)
        //Com o isNotDeleted, posso controlar quando vai ser atualizada a pagina
        if (!isNotDeleted) {
            getNavers()
            toggleModalMessageOpen()
        }
        return
    }

    //Função que abre a modal de messagem
    function toggleModalMessageOpen() {
        setModalMessageVisible(true)
        return
    }

    //Função que fecha a modal de messagem
    function toggleModalMessageClose() {
        setModalMessageVisible(false)
        return
    }

    //Essa função coloca o header dentro da lista, assim mantendo um efeito de scroll
    function renderHeader() {
        return (
            <Header>
                <ContainerTitle>
                    <Title>Navers</Title>
                </ContainerTitle>

                <AddButton onPress={() => { navigation.navigate('NewNaver') }}>Adicionar naver</AddButton>
            </Header>
        )
    }

    useEffect(() => {
        getNavers()
    }, [])

    return (
        <Container>
            {loading ?
                <ContainerLoading>
                    <Loading size='large' color="#000" />
                </ContainerLoading> :

                <List
                    data={navers}
                    ListHeaderComponent={renderHeader}
                    keyExtractor={naver => String(naver.id)}
                    refreshing={loading}
                    onRefresh={getNavers}
                    renderItem={({ item: naver }) => (
                        <Naver>
                            <ContainerImage onPress={() => { navigation.navigate('Naver', { naver }) }}>
                                <Avatar source={{ uri: naver.url }} resizeMode="contain" />
                            </ContainerImage>
                            <Label isBold>{naver.name}</Label>
                            <Label>{naver.job_role}</Label>
                            <ContainerOptions>
                                <Touchable onPress={() => { toggleModalConfirmOpen(naver.id) }}>
                                    <Icon source={DeleteIcon} resizeMode="contain" />
                                </Touchable>

                                <Touchable onPress={() => { }}>
                                    <Icon source={EditIcon} resizeMode="contain" />
                                </Touchable>
                            </ContainerOptions>
                        </Naver>
                    )}
                />

            }
            <Confirm visible={modalConfirmVisible} onRequestClose={toggleModalConfirmClose} getNavers={getNavers} idNaver={idNaver} />
            <Message visible={modalMessageVisible} onRequestClose={toggleModalMessageClose} Title="Naver excluído" Message="Naver excluído com sucesso!" />
        </Container>
    );
}
