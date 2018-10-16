import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import {
  ChartTitle,
  ChartWrapper,
  Footer,
  PayYourBillText,
  Wrapper
} from './Bill.styles';
import Cost from './Cost';
import FooterLogo from '../../components/FooterLogo';
import * as Routes from '../../constants/routes';
import Button from '../../components/Button';
import { ORANGE } from '../../constants/colors';
import TopCard from '../../components/TopCard/TopCard';

@observer
class Bill extends React.Component {
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

  @observable
  payment = null;

  componentDidMount() {
    const { navigation } = this.props;

    this.payment = navigation.getParam('payment');
  }

  renderChart() {
    return (
      <LineChart
        data={{
          labels: ['Oct', 'Nov', 'Dec', 'Jan'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                parseFloat(this.payment.sum)
              ]
            }
          ]
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: '#f0f0f0',
          backgroundGradientFrom: '#f0f0f0',
          backgroundGradientTo: '#f0f0f0',
          decimalPlaces: 2,
          color: (opacity = 1) => '#091d2e'
        }}
        style={{
          marginVertical: 8,
          borderRadius: 0,
          color: 'blue'
        }}
      />
    );
  }

  onPay = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.PAY, {
      payment: this.payment
    });
  };

  render() {
    return this.payment ? (
      <Wrapper>
        <TopCard
          image={this.payment.image}
          text={this.payment.title}
          backgroundColor={this.payment.color}
        />
        <Cost month={this.payment.month} price={this.payment.sum} />
        <ChartWrapper>
          <ChartTitle>Your {this.payment.title} Usage</ChartTitle>
          {this.renderChart()}
        </ChartWrapper>
        <Footer>
          <Button onPress={this.onPay} backgroundColor={ORANGE}>
            <PayYourBillText>
              Pay your {this.payment.title} bill
            </PayYourBillText>
          </Button>
        </Footer>
        <FooterLogo />
      </Wrapper>
    ) : null;
  }
}

export default Bill;
