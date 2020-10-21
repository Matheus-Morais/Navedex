import React from 'react';
import PropTypes from 'prop-types';
import { Modal as RNModal } from 'react-native';

import { Container, KeyboardContainer } from './styles';

function Modal({ visible, children, onRequestClose }) {
    return (
        <RNModal
            visible={visible}
            animationType="fade"
            transparent
            onRequestClose={onRequestClose}
        >
            <KeyboardContainer>
                <Container>
                    {children}
                </Container>
            </KeyboardContainer>
        </RNModal>
    );
}

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
        .isRequired
};

export default Modal
