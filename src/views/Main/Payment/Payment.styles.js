import styled from 'styled-components';

export const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30px;
  padding-right: 20px;
  height: 90px;
  background-color: ${props => props.color || '#000'};
`;

export const ImageWrapper = styled.View`
  margin-right: 15px;
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

export const Info = styled.View`
  margin-left: auto;
  margin-right: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bill = styled.Text`
  margin-bottom: 4px;
  color: #fff;
  font-weight: 700;
  font-size: 9px;
`;

export const Month = styled.Text`
  color: #fff;
  font-weight: 400;
  font-size: 9px;
`;
export const Sum = styled.Text`
  color: #fff;
  font-weight: 400;
  font-size: 9px;
`;

export const ChevronWrapper = styled.View`
  width: 13px;
  height: 13px;
`;
export const Chevron = styled.Image`
  width: 100%;
  height: 100%;
`;
