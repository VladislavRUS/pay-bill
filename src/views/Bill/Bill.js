import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Dimensions, View } from 'react-native';
import {
  BarChart,
  ContributionGraph,
  LineChart,
  PieChart,
  ProgressChart
} from 'react-native-chart-kit';
import Payment from '../Main/Payment';
import { Wrapper } from './Bill.styles';

@observer
class Bill extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Back',
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
                Math.random() * 100
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
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => this.payment.color,
          style: {
            borderRadius: 0
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    );
  }

  render() {
    return this.payment ? (
      <Wrapper>
        <Payment centered noInfo noChevron payment={this.payment} />
        {this.renderChart()}
      </Wrapper>
    ) : null;
  }
}

export default Bill;
