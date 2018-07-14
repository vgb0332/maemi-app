/**
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Alert,
} from 'react-native';
import { connect } from 'react-redux';

import { StylesCommon } from '../../Styles';
import * as C from '../../Styles/Colors';


type Props = {

};

class Message extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            tabBarLabel: 'Message',
            // tabBarOnPress: (scene, jumpToIndex) => {
            //     console.log('onPress:', scene.index);
            //     console.log('onPress:',jumpToIndex);
            //     // jumpToIndex(scene.index);
            // },
        };
    };

    constructor(props) {
        super(props);
        this.state = {
          
        };
  
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: C.background }}>
              <Text>Message</Text>
            </View>
        );
    }
}

export default connect(state => ({

}))(Message);
