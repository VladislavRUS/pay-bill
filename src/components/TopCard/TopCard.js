import React from 'react';
import { Wrapper, ImageWrapper, Image, Title } from './TopCard.styles';

const TopCard = props => (
  <Wrapper backgroundColor={props.backgroundColor}>
    {props.image && (
      <ImageWrapper>
        <Image source={props.image} resizeMode={'contain'} />
      </ImageWrapper>
    )}

    <Title>{props.text}</Title>
  </Wrapper>
);

export default TopCard;
