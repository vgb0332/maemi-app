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

class Oldcar extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            tabBarLabel: 'Oldcar',
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
              <Text>Oldcar</Text>
            </View>
        );
    }
}

export default connect(state => ({

}))(Oldcar);
