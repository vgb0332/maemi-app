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
import InfiniteList from '../../Common/InfinitiList';
import * as ActionMagazines from '../../Data/Magazine/actions';
import VerticalDivider from '../../Common/VerticalDivider'

type Props = {

};

class Magazine extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            tabBarLabel: 'Magazine',
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
            params: { idx: 0, count: 10, type: 1, page: 1 },
            isSelectList: true,
            isSelectGrid: false,
            numColumns: 1,
        };
  
    }

    render() {
        const Listitem = (item, index) => (
            <View style={{ flex: 1 }}>
                <Text>{item.title}</Text>
                <VerticalDivider />
            </View>
        );

        const header = () => (
            <View style={{ flex: 1 }}>
                <Text>{'List Header'}</Text>
                <VerticalDivider />
            </View>
        );

        return (
            <View style={{ flex: 1, backgroundColor: C.background }}>
                <InfiniteList
                  type={1}
                  header={header}
                  numColumns={this.state.numColumns}
                  Get={ActionMagazines.getMagazines}
                  onRef={(ref) => { this.MagazineList = ref; }}
                  ListItem={this.state.isSelectList ? Listitem : Listitem}
                  GetParams={this.state.params}
                />
            </View>
        );
    }
}

export default connect(state => ({

}))(Magazine);
