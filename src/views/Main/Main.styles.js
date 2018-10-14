import styled from 'styled-components';
import { DARK_BLUE, RED } from '../../constants/colors';

export const Wrapper = styled.FlatList`
  display: flex;
  flex-grow: 1;
  background-color: #fff;
`;

export const LogoutButton = styled.TouchableOpacity`
  padding-right: 20px;
`;

export const LogoutText = styled.Text`
  color: #007aff;
  font-size: 16px;
`;

export const UserInfo = styled.View`
  padding: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.Image`
  margin-right: 22px;
  width: 80px;
  height: 80px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  padding-top: 11px;
`;

export const Name = styled.Text`
  margin-bottom: 7px;
  color: #f71735;
  font-size: 25px;
  font-weight: 300;
`;
export const Address = styled.Text`
  margin-bottom: 5px;
  color: #011627;
  font-size: 11px;
  font-weight: 700;
`;
export const BillId = styled.Text`
  color: #a5a5a5;
  font-size: 11px;
  font-weight: 700;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Options = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  ${{ borderBottomWidth: 1 }};
  ${{ borderBottomColor: '#ebebeb' }};
`;

export const IconWrapper = styled.View`
  margin-right: 23px;
  width: 16px;
  height: 16px;
`;

export const Icon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #011627;
  font-size: 14px;
  font-weight: 400;
`;

export const ChevronIconWrapper = styled.View`
  margin-left: auto;
  width: 13px;
  height: 13px;
`;
export const ChevronIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Copyrights = styled.View`
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
