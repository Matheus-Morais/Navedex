import React, { useState } from 'react';
import { intervalToDuration } from 'date-fns';

import Message from '../../../components/Message';
import Confirm from '../../../components/Confirm';

import {
    Container,
    ContainerImage,
    Avatar,
    NaverItem,
    Title,
    SubTitle,
    ContainerButtons,
    DeleteButton,
    EditButton
} from './styles';

export default function Naver({ route, navigation }) {
    const { naver } = route.params

    const [modalConfirmVisible, setModalConfirmVisible] = useState(false)

    const [modalMessageVisible, setModalMessageVisible] = useState(false)

    //função que pega o tempo decorrido
    function getTime(dateString) {
        let interval = intervalToDuration({
            start: new Date(dateString),
            end: new Date()
        })
        return `${interval.years} anos, ${interval.months} meses e ${interval.days} dias`
    }

    //Função que abre a modal de confirmação
    function toggleModalConfirmOpen() {
        setModalConfirmVisible(true)
        return
    }

    //Função que fecha a modal de confirmação
    function toggleModalConfirmClose(isNotDeleted = true) {
        setModalConfirmVisible(false)
        //Com o isNotDeleted, posso controlar quando vai ser atualizada a pagina
        if (!isNotDeleted) {
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
        navigation.push('Navers')
        setModalMessageVisible(false)
        return
    }

    return (
        <Container>
            <ContainerImage>
                <Avatar source={{ uri: naver.url }} resizeMode="contain" />
            </ContainerImage>

            <NaverItem>
                <Title>{naver.name}</Title>
                <SubTitle>{naver.job_role}</SubTitle>
            </NaverItem>

            <NaverItem>
                <SubTitle isTitle>Idade</SubTitle>
                <SubTitle>{getTime(naver.birthdate)}</SubTitle>
            </NaverItem>

            <NaverItem>
                <SubTitle isTitle>Tempo de empresa</SubTitle>
                <SubTitle>{getTime(naver.admission_date)}</SubTitle>
            </NaverItem>

            <NaverItem>
                <SubTitle isTitle>Projetos que participou</SubTitle>
                <SubTitle>{naver.project}</SubTitle>
            </NaverItem>

            <NaverItem>
                <ContainerButtons>
                    <DeleteButton color="#212121" icon="delete" onPress={toggleModalConfirmOpen}>Excluir</DeleteButton>

                    <EditButton icon="edit" onPress={() => { navigation.navigate('NewNaver', { naver }) }}>Editar</EditButton>
                </ContainerButtons>
            </NaverItem>
            <Confirm visible={modalConfirmVisible} onRequestClose={toggleModalConfirmClose} idNaver={naver.id} />
            <Message visible={modalMessageVisible} onRequestClose={toggleModalMessageClose} Title="Naver excluído" Message="Naver excluído com sucesso!" />
        </Container>
    );
}
