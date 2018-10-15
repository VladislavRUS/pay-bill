import styled from 'styled-components';

export const Wrapper = styled.View`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  align-items: center;
  ${{ borderBottomWidth: 1 }};
  ${{ borderBottomColor: '#ebebeb' }};
`;

export const Title = styled.Text`
  margin-bottom: 5px;
  color: #a5a5a5;
  font-size: 17px;
  font-weight: 700;
`;
export const Subtitle = styled.Text`
  margin-bottom: 10px;
  color: #a5a5a5;
  font-size: 10px;
  font-weight: 400;
`;
export const Price = styled.Text`
  color: #091d2e;
  font-size: 55px;
  font-weight: 300;
`;
