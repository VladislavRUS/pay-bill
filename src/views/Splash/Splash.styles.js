import styled from 'styled-components';
import { DARK_BLUE, RED, WHITE } from '../../constants/colors';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 12px;
  background-color: ${WHITE};
  align-items: center;
  justify-content: center;
`;

export const ImagesWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 178px;
`;

export const ImageWrapper = styled.View`
  width: 50px;
  height: 50px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const LogoWrapper = styled.View`
  margin-bottom: 30px;
`;

export const ButtonsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.TouchableOpacity`
  margin-bottom: 7px;
  width: 100%;
  height: 39px;
  border-radius: 4px;
`;

export const LoginButton = styled(Button)`
  background-color: ${RED};
`;

export const RegisterButton = styled(Button)`
  background-color: ${DARK_BLUE};
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  line-height: 39px;
  color: ${WHITE};
  text-align: center;
`;
