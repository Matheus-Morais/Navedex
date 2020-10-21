import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, TextInputMaskPassForget } from './styles';

function InputMaskedFunction({ style, ...rest }, ref) {
    return (
        <Container style={style}>
            <TextInputMaskPassForget {...rest} ref={ref} />
        </Container>
    );
}

const InputMasked = forwardRef(InputMaskedFunction);

InputMasked.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

InputMasked.defaultProps = {
    style: {},
}

InputMasked.displayName = 'InputMasked';

export default InputMasked;
