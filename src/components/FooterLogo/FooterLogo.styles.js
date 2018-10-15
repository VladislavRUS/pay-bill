import styled from 'styled-components';
import { DARK_BLUE, RED } from '../../constants/colors';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 25px;
`;

export const CompanyName = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Pay = styled.Text`
  color: ${RED};
  font-size: 9px;
  font-weight: 300;
`;

export const Bill = styled.Text`
  color: ${DARK_BLUE};
  font-size: 9px;
  font-weight: 500;
`;
export const Rights = styled.Text`
  color: #9d9d9d;
  font-size: 9px;
  font-weight: 400;
`;
