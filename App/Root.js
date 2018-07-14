/**
 * @flow
 */

import React, { Component } from 'react';

import {
  View,
  StatusBar,
  BackHandler,
  Alert,
  Platform,
    Text,
} from 'react-native';
import { connect } from 'react-redux';


// Action
// import * as ActionAuth from './Data/Authentification/actions';
// import * as ActionTypes from './Data/Authentification/actionTypes';

// Views
// import Loading from './Common/Loading';
import AppNavigator from './AppNavigator';
// import LoginRoot from './Containers/Login/root';

// Style
import { StylesCommon } from './Styles';
import * as C  from './Styles/Colors';

type Props = {

};

type State = {

};

class Root extends Component<Props, State> {
  constructor(props) {
    super(props);
    // 뒤로가기 버튼
    BackHandler.addEventListener('hardwareBackPress', () => {
      Alert.alert(
        '종료',
        '앱을 종료하시겠습니까?',
        [
          { text: 'No', onPress: () => {} },
          { text: 'Yes', onPress: () => { BackHandler.exitApp(); } },
        ],
      );
      return true;
    });
  }

  componentWillMount() {
    console.disableYellowBox = true;
  }

  getCurrentRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return this.getCurrentRouteName(route);
    }
    return route.routeName;
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
          <AppNavigator
              onNavigationStateChange={(prevState, currentState) => {
                  const currentScreen = this.getCurrentRouteName(currentState);
                  const prevScreen = this.getCurrentRouteName(prevState);
                  console.log(currentScreen, prevScreen);
                  console.log(currentScreen === prevScreen)
                 
              }}
          />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { };
}

export default connect(mapStateToProps)(Root);
