import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    TInput
} from './styles';

function InputFunction({ style, ...rest }, ref) {
    return (
        <Container style={style}>
            <TInput {...rest} ref={ref} />
        </Container>
    );
}

const Input = forwardRef(InputFunction);

Input.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Input.defaultProps = {
    style: {},
}

Input.displayName = 'Input';

export default Input;
