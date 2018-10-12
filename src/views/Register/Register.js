import React from 'react';
import {
  Wrapper,
  LogoWrapper,
  Form,
  FullName,
  Email,
  Phone,
  Password,
  BillId,
  NotSure,
  SubmitButton,
  SubmitText
} from './Register.styles';
import Logo from '../../components/Logo';
import { ActivityIndicator, Keyboard } from 'react-native';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class Register extends React.Component {
  @observable
  isLoading = false;

  onRegister = () => {
    this.isLoading = true;
  };

  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Form enabled>
          <FullName
            placeholder={'Full name'}
            placeholderTextColor={'#011627'}
          />
          <Email
            keyboardType={'email-address'}
            placeholder={'Email Address'}
            placeholderTextColor={'#011627'}
          />
          <Phone
            keyboardType={'phone-pad'}
            placeholder={'Phone Number'}
            placeholderTextColor={'#011627'}
          />
          <Password
            placeholder={'Password'}
            placeholderTextColor={'#011627'}
            secureTextEntry={true}
          />
          <BillId
            keyboardType={'number-pad'}
            placeholder={'My PayBill id'}
            placeholderTextColor={'#011627'}
          />
          <NotSure>Not sure ? Find your ID by clicking here</NotSure>
          <SubmitButton onPress={this.onRegister}>
            {this.isLoading ? (
              <ActivityIndicator color={'#fff'} />
            ) : (
              <SubmitText>Register</SubmitText>
            )}
          </SubmitButton>
        </Form>
      </Wrapper>
    );
  }
}

export default Register;
