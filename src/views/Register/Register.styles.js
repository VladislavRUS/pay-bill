import styled from 'styled-components';
import { DARK_BLUE, WHITE } from '../../constants/colors';
import Input from '../../components/Input';

export const Wrapper = styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${WHITE};
`;

export const LogoWrapper = styled.View`
  margin-top: 46px;
  margin-bottom: 39px;
`;

export const FullName = styled(Input)``;
export const Email = styled(Input)``;
export const Phone = styled(Input)``;
export const Password = styled(Input)``;
export const BillId = styled(Input)``;

export const NotSure = styled.Text`
  margin-top: 5px;
  margin-left: 22px;
  margin-bottom: 19px;
  font-size: 12px;
  color: ${DARK_BLUE};
`;

export const SubmitButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 39px;
  border-radius: 4px;
  background-color: ${DARK_BLUE};
`;

export const SubmitText = styled.Text`
  color: #ffffff;
  line-height: 39px;
  font-size: 17px;
  text-align: center;
`;
