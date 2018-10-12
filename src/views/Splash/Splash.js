import React from 'react';
import {
  Wrapper,
  ImagesWrapper,
  Image,
  ImageWrapper,
  LogoWrapper,
  SubtitleWrapper,
  Subtitle,
  ButtonsWrapper,
  LoginButton,
  RegisterButton,
  ButtonText
} from './Splash.styles';
import splash1 from '../../assets/splash_1.png';
import splash2 from '../../assets/splash_2.png';
import splash3 from '../../assets/splash_3.png';
import Logo from '../../components/Logo';

class Splash extends React.Component {
  onLoginPress = () => {
    const { navigation } = this.props;

    navigation.navigate('Login');
  };

  onRegisterPress = () => {
    const { navigation } = this.props;

    navigation.navigate('Register');
  };

  render() {
    return (
      <Wrapper>
        <ImagesWrapper>
          <ImageWrapper width={36} height={56}>
            <Image source={splash1} resizeMode={'cover'} />
          </ImageWrapper>
          <ImageWrapper width={36} height={56}>
            <Image source={splash2} />
          </ImageWrapper>
          <ImageWrapper width={50} height={50}>
            <Image source={splash3} />
          </ImageWrapper>
        </ImagesWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <ButtonsWrapper>
          <LoginButton>
            <ButtonText onPress={this.onLoginPress}>Login</ButtonText>
          </LoginButton>
          <RegisterButton>
            <ButtonText onPress={this.onRegisterPress}>
              New Customer? Register
            </ButtonText>
          </RegisterButton>
        </ButtonsWrapper>
      </Wrapper>
    );
  }
}

export default Splash;
