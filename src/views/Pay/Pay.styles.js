import styled from 'styled-components';

export const Wrapper = styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #fff;
`;

export const TitleWrapper = styled.View`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #585858;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 30px;
  font-weight: 300;
`;

export const Info = styled.View`
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${{ borderBottomWidth: 1 }};
  ${{ borderBottomColor: '#ebebeb' }};
`;

export const Subtitle = styled.Text`
  margin-bottom: 13px;
  color: #a5a5a5;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const Amount = styled.Text`
  color: #282828;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
`;

export const Cards = styled.View`
  padding: 13px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  align-self: center;
`;

export const CardImageWrapper = styled.View`
  width: 30px;
  height: 20px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Form = styled.KeyboardAvoidingView`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.TextInput`
  margin-bottom: 8px;
  padding-left: 18px;
  height: 39px;
  background-color: #d5d5d5;
  color: #011627;
  border-radius: 4px;
`;

export const Name = styled(Input)``;
export const CardNumber = styled(Input)``;
export const ExpirationDate = styled(Input)``;
export const CCVWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CCV = styled(Input)`
  flex-grow: 1;
`;
export const HintWrapper = styled.View`
  margin-left: 8px;
  height: 39px;
  width: 50px;
`;
export const Hint = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Footer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  position: relative;
  height: 80px;
`;

export const PayNow = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #ff9f1c;
  opacity: 0.9;
  border-radius: 4px;
`;

export const PayNowText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: 400;
`;
