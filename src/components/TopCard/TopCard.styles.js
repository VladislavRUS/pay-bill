import styled from 'styled-components';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 90px;
  background-color: ${props => props.backgroundColor || '#000'};
`;

export const ImageWrapper = styled.View`
  margin-right: 13px;
  width: 50px;
  height: 50px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 30px;
  font-weight: 300;
`;
