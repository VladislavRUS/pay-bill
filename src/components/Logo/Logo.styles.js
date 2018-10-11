import styled from 'styled-components';
import { DARK_BLUE, RED } from '../../constants/colors';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  height: 50px;
`;

const Text = styled.Text`
  font-size: 50px;
  line-height: 50px;
`;

export const PayText = styled(Text)`
  font-weight: 300;
  color: ${RED};
`;

export const BillText = styled(Text)`
  font-weight: 700;
  color: ${DARK_BLUE};
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #9c9c9c;
  text-align: center;
  width: 100%;
`;
