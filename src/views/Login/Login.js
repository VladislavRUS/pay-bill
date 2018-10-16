import React from 'react';
import {
  LogoWrapper,
  Password,
  SubmitText,
  Username,
  Wrapper
} from './Login.styles';
import Logo from '../../components/Logo';
import { ActivityIndicator, Keyboard } from 'react-native';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import * as Routes from '../../constants/routes';
import Button from '../../components/Button';
import { RED } from '../../constants/colors';
import Form from '../../components/Form';

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

          <Button onPress={this.onLogin} backgroundColor={RED}>
            {this.isLoading ? (
              <ActivityIndicator color={'#fff'} />
            ) : (
              <SubmitText>Login</SubmitText>
            )}
          </Button>
        </Form>
      </Wrapper>
    );
  }
}

export default Login;
