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

import HomeView from './Containers/Home/index';

import Event from './Containers/Home/Event';
import Hotdeal from './Containers/Home/Hotdeal';
import Message from './Containers/Home/Message';
import Newcar from './Containers/Home/Newcar';
import Oldcar from './Containers/Home/Oldcar';
import SellMycar from './Containers/Home/SellMycar';
import Magazine from './Containers/Home/Magazine';



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

const homeTabNavigator = TabNavigator({
    Event: {
        screen: Event,
        navigationOptions: {
            tabBarVisible: true,
            gesturesEnabled: false,
        },
    },
    Newcar: {
        screen: Newcar,
        navigationOptions: {
            tabBarVisible: true,
            gesturesEnabled: false,
        },
    },
    Oldcar: {
        screen: Oldcar,
        navigationOptions: {
            tabBarVisible: true,
            gesturesEnabled: false,
        },
    },
    SellMycar: {
        screen: SellMycar,
        navigationOptions: {
            tabBarVisible: true,
            gesturesEnabled: false,
        },
    },
    Message: {
        screen: Message,
        navigationOptions: {
            tabBarVisible: true,
            gesturesEnabled: false,
        },
    },
    Hotdeal: {
        screen: Hotdeal,
        navigationOptions: {
            tabBarVisible: true,
            gesturesEnabled: false,
        },
    },
    Magazine: {
        screen: Magazine,
        navigationOptions: {
            tabBarVisible: true,
            gesturesEnabled: false,
        },
    }
}, {
    headerMode: 'none',
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    initialRouteName: 'Event',
    tabBarOptions: {
        showIcon: false,
        scrollEnabled: true,
        inactiveTintColor: C.text,
        activeTintColor: C.main,
        labelStyle: {
            fontSize: 10,
            fontWeight: 'bold',
        },
        tabStyle: {
            padding: 0,
            width: 90,
            height: 50,
        },
        style: {
            backgroundColor: C.white,
        },
        indicatorStyle: {
            height: 3,
            backgroundColor: C.main,
        },
    },
});


const homeStackNavigatior = StackNavigator({
    Home: {
        screen: homeTabNavigator,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: false,
            header: (
                <Header/>
            ),
        }),
    }
}, {
    initialRouteName: 'Home',
});


export default drawerNavigator = DrawerNavigator({
  Main: {
      screen: homeStackNavigatior,
      navigationOptions: ({ navigation }) => ({
          header: (
              <View><Text>{'Header'}</Text></View>
          ),
      }),
},
}, {
  initialRouteName: 'Main',
    drawerWidth: D.width - (D.width * 0.2),
    contentComponent: Drawer,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});
