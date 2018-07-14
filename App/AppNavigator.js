import React from 'react';
import {
  TouchableOpacity,
  Text,
    Image,
    StyleSheet,
    View,
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
    TabBarTop,
} from 'react-navigation';

import HomeView from './Containers/Home/Default';

import Event from './Containers/Home/Event';
// import Hotdeal from './Containers/Home/Hotdeal';
import Message from './Containers/Home/Message';
import Newcar from './Containers/Home/Newcar';
import Oldcar from './Containers/Home/Oldcar';
import SellMycar from './Containers/Home/SellMycar';
// import Magazine from './Containers/Home/Magazine';



import Drawer from './Containers/Drawer';
import Header from './Common/Header';


import * as C from './Styles/Colors';
import * as D from './Styles/Dimensions';

const styles = StyleSheet.create({
    tabNavText: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 18,
    },
});

type NavbarProps = {

};


export default StackNavigator({
    Home: {
        screen: HomeView,
        navigationOptions: ({ navigation }) => ({
          header: null,

        }),
    },
    Event: {
        screen: Event,
        navigationOptions: ({ navigation }) => ({
            header: null,

        }),
    },
    Message: {
        screen: Message,
        navigationOptions: ({ navigation }) => ({
            header: null,
        }),
    },
    Newcar: {
        screen: Newcar,
        navigationOptions: ({ navigation }) => ({
            header: null,

        }),
    },
    Oldcar: {
        screen: Oldcar,
        navigationOptions: ({ navigation }) => ({
            header: null,

        }),
    },
    SellMycar: {
        screen: SellMycar,
        navigationOptions: ({ navigation }) => ({
            header: null,
        }),
    }
}, {
    initialRouteName: 'Home',
    headerMode: 'float',
});

