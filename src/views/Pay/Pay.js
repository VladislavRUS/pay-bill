import React from 'react';
import {
  Wrapper,
  TitleWrapper,
  Title,
  Info,
  Subtitle,
  Amount,
  Cards,
  CardImageWrapper,
  CardImage,
  Form,
  Name,
  CardNumber,
  ExpirationDate,
  CCVWrapper,
  CCV,
  HintWrapper,
  Hint,
  Footer,
  PayNow,
  PayNowText
} from './Pay.styles';
import masterCard from '../../assets/card_1.png';
import visa from '../../assets/card_2.png';
import aExpress from '../../assets/card_3.png';
import discover from '../../assets/card_4.png';
import cvvHint from '../../assets/cvv-hint.png';
import FooterLogo from '../../components/FooterLogo';

const cards = [masterCard, visa, aExpress, discover];

class Pay extends React.Component {
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

  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>Pay your bill</Title>
        </TitleWrapper>
        <Info>
          <Subtitle>
            You are paying your water bill for the month of January 2016
          </Subtitle>
          <Amount>Total amount due $99.01</Amount>
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
            keyboardType={'number-pad'}
          />
          <CCVWrapper>
            <CCV
              placeholder={'CCV (security code)'}
              placeholderTextColor={'#011627'}
              secureTextEntry={true}
              keyboardType={'number-pad'}
            />
            <HintWrapper>
              <Hint source={cvvHint} resizeMode={'stretch'} borderRadius={4} />
            </HintWrapper>
          </CCVWrapper>
        </Form>
        <Footer>
          <PayNow onPress={this.onPay}>
            <PayNowText>Pay now</PayNowText>
          </PayNow>
        </Footer>
        <FooterLogo />
      </Wrapper>
    );
  }
}

export default Pay;
