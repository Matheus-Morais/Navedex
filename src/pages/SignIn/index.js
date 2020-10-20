import React, { useRef, useState } from 'react';

import logo from '../../assets/Logo.png';

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
    const passwordRef = useRef()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        setLoading(!loading)
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
            </KeyboardContainer>
        </Container>
    );
}

export default SignIn;
