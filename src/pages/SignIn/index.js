import React, { useRef, useState } from 'react';
import { Alert } from "react-native";
import { useDispatch } from 'react-redux';

import logo from '../../assets/Logo.png';
import { loginSuccess } from '../../store/modules/auth/actions';
import Message from '../../components/Message';
import api from '../../services/api';

import {
    Container,
    KeyboardContainer,
    Logo,
    Form,
    ItemForm,
    Label,
    FormInput,
    SubmitButton
} from './styles';

const SignIn = () => {
    const dispatch = useDispatch()
    const passwordRef = useRef()

    const [modalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState()
    const [modalMessage, setModalMessage] = useState()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        setLoading(true)

        let errors = ''

        //Verifica se os campos foram informados
        if (!email) {
            errors = 'Email não informado.'
        }

        if (!password) {
            if (errors) {
                errors = `${errors}\nSenha não informada.`
            } else {
                errors = 'Senha não informada.'
            }
        }

        if (errors) {
            setModalTitle('Opps!')
            setModalMessage(errors)

            toggleModalOpen()
            setLoading(false)
            return
        }

        //variavel responsavel para requisição
        let response
        let credentials = {
            email,
            password
        }

        try {
            response = await api.post('/users/login', credentials)
        } catch (error) {
            setModalTitle('Opps!')
            setModalMessage('Verifique seus dados.')

            toggleModalOpen()
            setLoading(false)
            return
        }

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        dispatch(loginSuccess(response.data.token, response.data.id))
        setLoading(false)
        return
    }

    function toggleModalOpen() {
        setModalVisible(true)
        return
    }

    //Função que fecha a modal
    function toggleModalClose() {
        setModalVisible(false)
        return
    }

    return (
        <Container>
            <KeyboardContainer>

                <Logo source={logo} resizeMode="contain" />

                <Form>
                    <ItemForm>
                        <Label>E-mail</Label>
                        <FormInput
                            keyboardType="default"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="E-mail"
                            returnKeyType="next"
                            onSubmitEditing={() => passwordRef.current.focus()}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </ItemForm>
                    <ItemForm>
                        <Label>Senha</Label>
                        <FormInput
                            placeholder="Senha"
                            keyboardType="default"
                            autoCorrect={false}
                            ref={passwordRef}
                            returnKeyType="send"
                            secureTextEntry={true}
                            onSubmitEditing={handleSubmit}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </ItemForm>

                    <ItemForm>
                        <SubmitButton loading={loading} onPress={handleSubmit}>Entrar</SubmitButton>
                    </ItemForm>
                </Form>
                <Message visible={modalVisible} onRequestClose={toggleModalClose} Title={modalTitle} Message={modalMessage} />
            </KeyboardContainer>
        </Container>
    );
}

export default SignIn;
