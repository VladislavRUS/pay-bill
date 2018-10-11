import React, { Component } from 'react';
import Splash from '../../views/Splash';
import Login from '../../views/Login';
import Register from '../../views/Register';
import { Easing, Animated } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

const transitionConfig = () => {
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
          initialRouteName: 'Splash',
          headerMode: 'none',
          transitionConfig
        }
      )
    },
    {
      initialRouteName: 'AuthStack'
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
