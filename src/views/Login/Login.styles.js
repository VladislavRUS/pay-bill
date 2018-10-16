import styled from 'styled-components';
import { WHITE } from '../../constants/colors';
import Input from '../../components/Input';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${WHITE};
  align-items: center;
  justify-content: flex-start;
`;

export const LogoWrapper = styled.View`
  margin-top: 46px;
  margin-bottom: 39px;
`;

export const Username = styled(Input)``;
export const Password = styled(Input)``;

export const SubmitText = styled.Text`
  color: #ffffff;
  line-height: 39px;
  font-size: 17px;
  text-align: center;
`;
