import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    background: #fff;
    width: 90%;
    height: 15%;

    padding: 0 24px 0 24px;

    justify-content: center;
`;

export const ContainerHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 16px;
`;

export const ContainerClose = styled.TouchableOpacity`
`;

export const LabelTitle = styled.Text`
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;

    text-align: left;

    color: #212121;
`;

export const Label = styled.Text`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    text-align: left;

    color: #212121;
`;

export const Icon = styled.Image`
    height: 24px;
    width: 24px;
`;
