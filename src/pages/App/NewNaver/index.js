import React, { useState } from 'react';

import api from '../../../services/api';
import Message from '../../../components/Message';

import {
    Container,
    ContainerTitle,
    Title,
    Form,
    ItemForm,
    Label,
    FormInput,
    FormInputMasked,
    SubmitButton
} from './styles';

export default function NewNaver({ route, navigation }) {
    const naver = route.params ? route.params.naver : null
    //Pega a data do naver, se houver
    const dateAdmissionFormated = naver ? naver.admission_date.split('T')[0].split('-') : null
    const dateBirthdateFormated = naver ? naver.birthdate.split('T')[0].split('-') : null

    const [loading, setLoading] = useState(false)

    const [modalVisible, setModalVisible] = useState(false)

    const [modalTitle, setModalTitle] = useState()
    const [modalMessage, setModalMessage] = useState()

    const [job_role, setJob_role] = useState(naver ? naver.job_role : '')
    const [admission_date, setAdmission_date] = useState(naver ? `${dateAdmissionFormated[2]}/${dateAdmissionFormated[1]}/${dateAdmissionFormated[0]}` : '')
    const [birthdate, setBirthdate] = useState(naver ? `${dateBirthdateFormated[2]}/${dateBirthdateFormated[1]}/${dateBirthdateFormated[0]}` : '')
    const [project, setProject] = useState(naver ? naver.project : '')
    const [name, setName] = useState(naver ? naver.name : '')
    const [url, setUrl] = useState(naver ? naver.url : 'https://pbs.twimg.com/profile_images/1316405760142835713/hiP2_LfJ_400x400.jpg')

    async function saveNaver() {
        setLoading(true)
        let errors = false

        //Verifica se todos os campos estão preenchidos
        if (!job_role) {
            errors = true
        }

        if (!admission_date) {
            errors = true
        }

        if (!birthdate) {
            errors = true
        }

        if (!project) {
            errors = true
        }

        if (!name) {
            errors = true
        }

        if (!url) {
            errors = true
        }

        //Se tiver algum input sem preenchimento é mandando um erro via modal
        if (errors) {
            setModalTitle('Opps!')
            setModalMessage('Verifique seus dados e tente novamente.')

            toggleModalOpen()
            setLoading(false)
            return
        }

        const body = {
            job_role,
            admission_date,
            birthdate,
            project,
            name,
            url
        }
        let request

        try {
            if (naver) {
                request = await api.put(`/navers/${naver.id}`, body);
            } else {
                request = await api.post('/navers', body)
            }
        } catch (error) {
            setModalTitle('Opps!')
            setModalMessage('Verifique seus dados e tente novamente.')

            toggleModalOpen()
            setLoading(false)
            return
        }

        //Se der tudo certo com o request, apenas retorna uma mensagem de ok
        setModalTitle(naver ? 'Naver editado' : 'Naver adicionado')
        setModalMessage(naver ? 'Naver editado com sucesso!' : 'Naver adicionado com sucesso!')

        toggleModalOpen()
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

        //Apenas navega de volta depois que salvar ou editar o novo naver
        navigation.goBack()
        return
    }

    return (
        <Container>
            <ContainerTitle>
                <Title>{naver ? 'Editar naver' : 'Adicionar naver'}</Title>
            </ContainerTitle>

            <Form>
                <ItemForm>
                    <Label>Nome</Label>
                    <FormInput
                        keyboardType="default"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome"
                        value={name}
                        onChangeText={setName}
                    />
                </ItemForm>

                <ItemForm>
                    <Label>Cargo</Label>
                    <FormInput
                        keyboardType="default"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Cargo"
                        value={job_role}
                        onChangeText={setJob_role}
                    />
                </ItemForm>

                <ItemForm>
                    <Label>Idade</Label>
                    <FormInputMasked
                        type={'datetime'}
                        placeholder="Idade"
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={birthdate}
                        onChangeText={text => { setBirthdate(text) }}
                    />

                </ItemForm>

                <ItemForm>
                    <Label>Tempo de empresa</Label>
                    <FormInputMasked
                        type={'datetime'}
                        placeholder="Tempo de empresa"
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={admission_date}
                        onChangeText={text => { setAdmission_date(text) }}
                    />
                </ItemForm>

                <ItemForm>
                    <Label>Projetos que participou</Label>
                    <FormInput
                        keyboardType="default"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Projetos que participou"
                        value={project}
                        onChangeText={setProject}
                    />
                </ItemForm>

                <ItemForm>
                    <Label>URL da foto do naver</Label>
                    <FormInput
                        keyboardType="default"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="URL da foto do naver"
                        value={url}
                        onChangeText={setUrl}
                    />
                </ItemForm>

                <ItemForm>

                    <SubmitButton loading={loading} onPress={saveNaver}>Salvar</SubmitButton>

                </ItemForm>
            </Form>
            <Message visible={modalVisible} onRequestClose={toggleModalClose} Title={modalTitle} Message={modalMessage} />
        </Container>
    );
}
