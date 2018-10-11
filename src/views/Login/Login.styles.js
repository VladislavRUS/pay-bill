import styled from 'styled-components';
import { RED, WHITE } from '../../constants/colors';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 12px;
  background-color: ${WHITE};
  align-items: center;
  justify-content: flex-start;
`;

export const LogoWrapper = styled.View`
  margin-top: 46px;
  margin-bottom: 39px;
`;

export const Form = styled.View`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  margin-bottom: 8px;
  padding-left: 18px;
  width: 100%;
  height: 39px;
  background-color: #d5d5d5;
  color: #011627;
  border-radius: 4px;
`;

export const Username = styled(Input)``;
export const Password = styled(Input)``;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 39px;
  border-radius: 4px;
  background-color: ${RED};
`;

export const SubmitText = styled.Text`
  margin-top: 5px;
  width: 100%;
  color: #ffffff;
  line-height: 39px;
  font-size: 17px;
  text-align: center;
`;
