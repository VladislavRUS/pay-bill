import React from 'react';
import { Wrapper, Title, Subtitle, Price } from './Cost.styles';

const Cost = props => (
  <Wrapper>
    <Title>Month of {props.month}</Title>
    <Subtitle>Till the end of {props.month} / 2018</Subtitle>
    <Price>${props.price + '.00'}</Price>
  </Wrapper>
);

export default Cost;
