import React from 'react';
import {
  Wrapper,
  LogoWrapper,
  Form,
  Username,
  Password,
  SubmitButton,
  SubmitText
} from './Login.styles';
import Logo from '../../components/Logo';
import { ActivityIndicator, Keyboard } from 'react-native';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import * as Routes from '../../constants/routes';

const DELAY_MS = 500;

@observer
class Login extends React.Component {
  @observable
  isLoading = false;

  onLogin = () => {
    Keyboard.dismiss();
    this.isLoading = true;
    setTimeout(() => {
      const { navigation } = this.props;
      navigation.navigate(Routes.MAIN_STACK);
    }, DELAY_MS);
  };

  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Form>
          <Username placeholder={'Username'} placeholderTextColor={'#011627'} />
          <Password
            placeholder={'Password'}
            placeholderTextColor={'#011627'}
            secureTextEntry={true}
          />
          <SubmitButton onPress={this.onLogin}>
            {this.isLoading ? (
              <ActivityIndicator color={'#fff'} />
            ) : (
              <SubmitText>Login</SubmitText>
            )}
          </SubmitButton>
        </Form>
      </Wrapper>
    );
  }
}

export default Login;
