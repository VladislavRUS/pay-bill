import React from 'react';
import { Wrapper, LogoWrapper, Form, Username, Password, SubmitButton, SubmitText } from './Login.styles';
import Logo from '../../components/Logo';

class Login extends React.Component {
  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Form>
          <Username placeholder={'Username'} placeholderTextColor={'#011627'} />
          <Password placeholder={'Password'} placeholderTextColor={'#011627'} />
          <SubmitButton>
              <SubmitText>Login</SubmitText>
          </SubmitButton>
        </Form>
      </Wrapper>
    );
  }
}

export default Login;
