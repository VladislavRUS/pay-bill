import React from 'react';
import {
  FormWrapper,
  FullName,
  Email,
  BillId,
  Password,
  Phone,
  UpdateText,
  Wrapper
} from './Update.styles';
import TopCard from '../../components/TopCard/TopCard';
import { GREY, RED } from '../../constants/colors';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { ActivityIndicator, Alert } from 'react-native';

@observer
class Update extends React.Component {
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
  isLoading = false;

  toMain = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  onUpdate = () => {
    this.isLoading = true;

    setTimeout(() => {
      Alert.alert(
        'Updated!',
        'Your info has been saved',
        [{ text: 'OK', onPress: this.toMain }],
        {
          cancelable: false
        }
      );
    }, 1000);
  };

  render() {
    return (
      <Wrapper>
        <TopCard backgroundColor={GREY} text={'Update details'} />
        <FormWrapper>
          <Form>
            <FullName
              placeholder={'Full name'}
              placeholderTextColor={'#011627'}
            />
            <Email
              keyboardType={'email-address'}
              placeholder={'Email Address'}
              placeholderTextColor={'#011627'}
            />
            <Phone
              keyboardType={'phone-pad'}
              placeholder={'Phone Number'}
              placeholderTextColor={'#011627'}
            />
            <Password
              placeholder={'Password'}
              placeholderTextColor={'#011627'}
              secureTextEntry={true}
            />
            <BillId
              keyboardType={'number-pad'}
              placeholder={'My PayBill id'}
              placeholderTextColor={'#011627'}
            />

            <Button onPress={this.onUpdate} backgroundColor={RED}>
              {this.isLoading ? (
                <ActivityIndicator color={'#fff'} />
              ) : (
                <UpdateText>Update</UpdateText>
              )}
            </Button>
          </Form>
        </FormWrapper>
      </Wrapper>
    );
  }
}

export default Update;
