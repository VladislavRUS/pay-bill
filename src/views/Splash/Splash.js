import React from 'react';
import {
  Wrapper,
  ImagesWrapper,
  Image,
  ImageWrapper,
  LogoWrapper,
  ButtonsWrapper,
  ButtonText
} from './Splash.styles';
import water from '../../assets/water.png';
import gas from '../../assets/gas.png';
import electricity from '../../assets/electricity.png';
import Logo from '../../components/Logo';
import * as Routes from '../../constants/routes';
import Button from '../../components/Button';
import { DARK_BLUE, RED } from '../../constants/colors';

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
          <Button onPress={this.onLoginPress} backgroundColor={RED}>
            <ButtonText>Login</ButtonText>
          </Button>
          <Button onPress={this.onRegisterPress} backgroundColor={DARK_BLUE}>
            <ButtonText>New Customer? Register</ButtonText>
          </Button>
        </ButtonsWrapper>
      </Wrapper>
    );
  }
}

export default Splash;
