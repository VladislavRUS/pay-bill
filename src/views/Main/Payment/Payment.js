import React from 'react';
import {
  Wrapper,
  ImageWrapper,
  Image,
  Info,
  Title,
  Bill,
  Month,
  Sum,
  ChevronWrapper,
  Chevron
} from './Payment.styles';
import chevron from '../../../assets/chevron.png';

const Payment = props => (
  <Wrapper
    color={props.payment.color}
    onPress={props.onPress}
    activeOpacity={0.7}
  >
    <ImageWrapper>
      <Image resizeMode={'contain'} source={props.payment.image} />
    </ImageWrapper>
    <Title>{props.payment.title}</Title>
    <Info>
      <Bill>Bill</Bill>
      <Month>{props.payment.month}</Month>
      <Sum>${props.payment.sum}</Sum>
    </Info>
    <ChevronWrapper>
      <Chevron source={chevron} resizeMode={'contain'} />
    </ChevronWrapper>
  </Wrapper>
);

export default Payment;
