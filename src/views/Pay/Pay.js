import React from 'react';
import {
  Wrapper,
  Info,
  Subtitle,
  Amount,
  Cards,
  CardImageWrapper,
  CardImage,
  Name,
  CardNumber,
  ExpirationDate,
  CCVWrapper,
  CCV,
  HintWrapper,
  Hint,
  Footer,
  PayNowText
} from './Pay.styles';
import masterCard from '../../assets/card_1.png';
import visa from '../../assets/card_2.png';
import aExpress from '../../assets/card_3.png';
import discover from '../../assets/card_4.png';
import cvvHint from '../../assets/cvv-hint.png';
import FooterLogo from '../../components/FooterLogo';
import * as Routes from '../../constants/routes';
import ActionSheet from 'react-native-actionsheet';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { ActivityIndicator, Alert } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Button from '../../components/Button';
import { GREY, ORANGE } from '../../constants/colors';
import TopCard from '../../components/TopCard/TopCard';
import Form from '../../components/Form';

const cards = [masterCard, visa, aExpress, discover];

@observer
class Pay extends React.Component {
  @observable
  payment = null;
  @observable
  actionSheet = null;
  @observable
  isLoading = false;

  componentDidMount() {
    const { navigation } = this.props;
    this.payment = navigation.getParam('payment');
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'PayBill',
    headerStyle: {
      borderBottomColor: 'transparent',
      borderWidth: 0,
      elevation: 0,
      shadowOpacity: 0
    },
    headerTitleStyle: {
      fontWeight: '300',
      fontSize: 17
    }
  });

  handleActionSheetRef = element => {
    this.actionSheet = element;
  };

  onPay = () => {
    this.actionSheet.show();
  };

  toMain = () => {
    const { navigation } = this.props;

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: Routes.MAIN })]
    });

    navigation.dispatch(resetAction);
  };

  render() {
    return this.payment ? (
      <Wrapper>
        <TopCard backgroundColor={GREY} text={'Pay your bill'} />
        <Info>
          <Subtitle>
            You are paying your {this.payment.title.toLowerCase()} bill for the
            month of {this.payment.month} 2018
          </Subtitle>
          <Amount>Total amount due ${this.payment.sum}</Amount>
        </Info>
        <Cards>
          {cards.map((card, idx) => (
            <CardImageWrapper key={idx}>
              <CardImage source={card} resizeMode={'contain'} />
            </CardImageWrapper>
          ))}
        </Cards>
        <Form>
          <Name
            placeholder={'Name (as it appears on card)'}
            placeholderTextColor={'#011627'}
          />
          <CardNumber
            placeholder={'Card number (no dashes or spaces)'}
            placeholderTextColor={'#011627'}
            keyboardType={'number-pad'}
          />
          <ExpirationDate
            placeholder={'Expiration date'}
            placeholderTextColor={'#011627'}
          />
          <CCVWrapper>
            <CCV
              placeholder={'CCV (security code)'}
              placeholderTextColor={'#011627'}
              secureTextEntry={true}
              keyboardType={'number-pad'}
            />
            <HintWrapper>
              <Hint source={cvvHint} resizeMode={'stretch'} borderRadius={2} />
            </HintWrapper>
          </CCVWrapper>
        </Form>
        <Footer>
          <Button onPress={this.onPay} backgroundColor={ORANGE}>
            {this.isLoading ? (
              <ActivityIndicator color={'#fff'} />
            ) : (
              <PayNowText>Pay now</PayNowText>
            )}
          </Button>
        </Footer>
        <FooterLogo />
        <ActionSheet
          ref={this.handleActionSheetRef}
          title={'Are you sure you want to pay?'}
          options={['Yes', 'Cancel']}
          onPress={index => {
            if (index === 0) {
              this.isLoading = true;
              setTimeout(() => {
                this.isLoading = false;
                Alert.alert(
                  'Payed!',
                  'Payment has been successfully done',
                  [{ text: 'OK', onPress: this.toMain }],
                  { cancelable: false }
                );
              }, 1000);
            }
          }}
        />
      </Wrapper>
    ) : null;
  }
}

export default Pay;
