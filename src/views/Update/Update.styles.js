import styled from 'styled-components';
import Input from '../../components/Input';

export const Wrapper = styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 30px;
  font-weight: 300;
`;

export const UpdateText = styled.Text`
  color: #ffffff;
  line-height: 39px;
  font-size: 17px;
  text-align: center;
`;

export const FormWrapper = styled.View`
  margin-top: 30px;
`;

export const FullName = styled(Input)``;
export const Email = styled(Input)``;
export const Phone = styled(Input)``;
export const Password = styled(Input)``;
export const BillId = styled(Input)``;
