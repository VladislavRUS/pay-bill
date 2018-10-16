import React, { Component } from 'react';
import Splash from '../../views/Splash';
import Login from '../../views/Login';
import Register from '../../views/Register';
import Main from '../../views/Main';
import Bill from '../../views/Bill';
import Pay from '../../views/Pay';
import { Easing, Animated } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import * as Routes from '../../constants/routes';
import Update from '../../views/Update';

const AuthStackTransitionConfig = () => {
  return {
    transitionSpec: {
      duration: 350,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const height = layout.initHeight;

      const translateY = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [height, 0, 0]
      });

      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [0, 1, 0]
      });

      return { opacity, transform: [{ translateY }] };
    }
  };
};

const MainStackTransitionConfig = () => {
  return {
    transitionSpec: {
      duration: 350,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      });

      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [0, 1]
      });

      return { opacity, transform: [{ translateX }] };
    }
  };
};

const createNavigator = () =>
  createSwitchNavigator(
    {
      AuthStack: createStackNavigator(
        {
          Splash,
          Login,
          Register
        },
        {
          initialRouteName: Routes.SPLASH,
          headerMode: 'none',
          transitionConfig: AuthStackTransitionConfig
        }
      ),
      MainStack: createStackNavigator(
        {
          Main,
          Bill,
          Pay,
          Update
        },
        {
          initialRouteName: Routes.MAIN,
          transitionConfig: MainStackTransitionConfig
        }
      )
    },
    {
      initialRouteName: Routes.AUTH_STACK
    }
  );

export default class App extends Component {
  constructor(props) {
    super(props);

    this.Navigator = createNavigator();
  }

  render() {
    const { Navigator } = this;
    return <Navigator />;
  }
}
