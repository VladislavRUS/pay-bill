import React from 'react';
import { Wrapper, CompanyName, Pay, Bill, Rights } from './FooterLogo.styles';

class FooterLogo extends React.Component {
  render() {
    return (
      <Wrapper>
        <CompanyName>
          <Pay>Pay</Pay>
          <Bill>Bill - </Bill>
        </CompanyName>
        <Rights>2016 Copyright All Rights Reserved</Rights>
      </Wrapper>
    );
  }
}

export default FooterLogo;
