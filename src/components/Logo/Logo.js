import React from 'react';
import { Wrapper, Title, PayText, BillText, Subtitle } from './Logo.styles';

class Logo extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>
          <PayText>Pay</PayText>
          <BillText>Bill</BillText>
        </Title>
        <Subtitle>Pay your bill on the go now</Subtitle>
      </Wrapper>
    );
  }
}

export default Logo;
