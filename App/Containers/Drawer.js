/**
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Alert,
    Linking
} from 'react-native';

import { connect } from 'react-redux';

import { StylesCommon } from '../Styles';
import * as C from '../Styles/Colors';



type Props = {

};

const styles = StyleSheet.create({

});

class Drawer extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
     
    }

    
  }
  componentWillMount() {
     
     
  }

  render() {

    return (
        <View style={{ flex: 1 }}>
            <Text>{'Drawer'}</Text>
        </View>
    );
  }
}

function mapStateToProps(state) {

    return {  };
}

export default connect(mapStateToProps)(Drawer);