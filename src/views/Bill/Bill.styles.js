import styled from 'styled-components';

export const Wrapper = styled.ScrollView`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const ChartWrapper = styled.View`
  text-align: center;
  background-color: #f0f0f0;
`;

export const ChartTitle = styled.Text`
  padding-top: 18px;
  margin-bottom: 15px;
  width: 100%;
  text-align: center;
  color: #a5a5a5;
  font-size: 16px;
  font-weight: 700;
`;

export const Footer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 10px;
  padding-left: 8px;
  padding-right: 8px;
  height: 80px;
`;

export const PayYourBillText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: 400;
`;
