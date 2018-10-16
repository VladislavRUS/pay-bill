import React from 'react';
import { TextInput } from './Input.styles';

const Input = props => (
  <TextInput {...props} onChangeText={props.onChangeText} />
);

export default Input;
