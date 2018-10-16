import React from 'react';
import { Wrapper } from './Button.styles';

const Button = props => (
  <Wrapper backgroundColor={props.backgroundColor} onPress={props.onPress}>
    {props.children}
  </Wrapper>
);

export default Button;
