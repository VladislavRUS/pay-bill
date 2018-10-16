import React from 'react';
import { Wrapper } from './Form.styles';

const Form = props => <Wrapper enabled>{props.children}</Wrapper>;

export default Form;
