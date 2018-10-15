import React from 'react';
import {
  Wrapper,
  LogoutButton,
  LogoutText,
  UserInfo,
  Avatar,
  Info,
  Name,
  Address,
  BillId,
  Footer,
  Options,
  Option,
  IconWrapper,
  Icon,
  Title,
  ChevronIconWrapper,
  ChevronIcon
} from './Main.styles';
import * as Routes from '../../constants/routes';
import userImg from '../../assets/user.png';
import Payment from './Payment';
import water from '../../assets/water.png';
import gas from '../../assets/gas.png';
import electricity from '../../assets/electricity.png';
import internet from '../../assets/internet.png';
import house from '../../assets/house.png';
import chevronDark from '../../assets/chevron_dark.png';
import profile from '../../assets/profile.png';
import care from '../../assets/care.png';
import {
  DARK_BLUE,
  ORANGE,
  RED,
  LIGHT_BLUE,
  GREY
} from '../../constants/colors';
import ActionSheet from 'react-native-actionsheet';
import FooterLogo from '../../components/FooterLogo';

const payments = [
  {
    title: 'Water',
    color: DARK_BLUE,
    month: 'January',
    image: water,
    sum: '127'
  },
  {
    title: 'Gas',
    color: ORANGE,
    month: 'January',
    image: gas,
    sum: '458'
  },
  {
    title: 'Electric',
    color: RED,
    month: 'January',
    image: electricity,
    sum: '345'
  },
  {
    title: 'Internet',
    color: LIGHT_BLUE,
    month: 'January',
    image: internet,
    sum: '53'
  },
  {
    title: 'Rent',
    color: GREY,
    month: 'January',
    image: house,
    sum: '983'
  }
];

const options = [
  {
    icon: profile,
    title: 'Update your profile details'
  },
  {
    icon: care,
    title: 'Call our 24/7 customer care line'
  }
];

class Main extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'PayBill',
    titleStyle: {
      alignSelf: 'center'
    },
    headerStyle: {
      borderBottomColor: 'transparent',
      borderWidth: 0,
      elevation: 0,
      shadowOpacity: 0
    },
    headerTitleStyle: {
      fontWeight: '300',
      fontSize: 17,
      alignSelf: 'center'
    },
    headerRight: (
      <LogoutButton onPress={() => navigation.getParam('actionSheet').show()}>
        <LogoutText>Logout</LogoutText>
      </LogoutButton>
    )
  });

  handleActionSheetRef = element => {
    const { navigation } = this.props;
    navigation.setParams({
      actionSheet: element
    });
  };

  onPress = payment => {
    const { navigation } = this.props;
    navigation.navigate(Routes.BILL, {
      payment
    });
  };

  render() {
    return (
      <Wrapper
        ListHeaderComponent={
          <UserInfo>
            <Avatar source={userImg} borderRadius={40} />
            <Info>
              <Name>John Doe Micheal</Name>
              <Address>105 Sesame Street, Melbourne VIC</Address>
              <BillId>PayBill ID : 256963356</BillId>
            </Info>
          </UserInfo>
        }
        ListFooterComponent={
          <Footer>
            <Options>
              {options.map((item, idx) => (
                <Option key={idx} activeOpacity={0.7}>
                  <IconWrapper>
                    <Icon resizeMode={'contain'} source={item.icon} />
                  </IconWrapper>
                  <Title>{item.title}</Title>
                  <ChevronIconWrapper>
                    <ChevronIcon source={chevronDark} />
                  </ChevronIconWrapper>
                </Option>
              ))}
            </Options>
            <FooterLogo />
            <ActionSheet
              ref={this.handleActionSheetRef}
              title={'Are you sure you want to logout?'}
              options={['Yes', 'Cancel']}
              onPress={index => {
                if (index === 0) {
                  this.props.navigation.navigate(Routes.AUTH_STACK);
                }
              }}
            />
          </Footer>
        }
        data={payments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Payment payment={item} onPress={() => this.onPress(item)} />
        )}
      />
    );
  }
}

export default Main;
