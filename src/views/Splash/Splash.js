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
import water from '../../assets/water.png';
import gas from '../../assets/gas.png';
import electricity from '../../assets/electricity.png';
import Logo from '../../components/Logo';
import * as Routes from '../../constants/routes';

class Splash extends React.Component {
  onLoginPress = () => {
    const { navigation } = this.props;

    navigation.navigate(Routes.LOGIN);
  };

  onRegisterPress = () => {
    const { navigation } = this.props;

    navigation.navigate(Routes.REGISTER);
  };

  render() {
    return (
      <Wrapper>
        <ImagesWrapper>
          <ImageWrapper>
            <Image source={water} resizeMode={'contain'} />
          </ImageWrapper>
          <ImageWrapper>
            <Image source={gas} resizeMode={'contain'} />
          </ImageWrapper>
          <ImageWrapper>
            <Image source={electricity} resizeMode={'contain'} />
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
