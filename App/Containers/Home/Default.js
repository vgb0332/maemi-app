/**
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';


type Props = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center"
    },
    flagButton: {
        fontSize: 10,
        fontWeight: '600',
        marginTop: 10
    }
});

class Default extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  
  componentDidMount() {

  }

  goToPage(flag){
      console.log(flag)
      this.props.navigation.navigate(flag);
  }

  render() {
      return (
          <View style={styles.container}>
            <TouchableOpacity style={styles.flagButton} onPress={this.goToPage.bind(this,'Event')}><Text>이벤트</Text></TouchableOpacity>
            <TouchableOpacity style={styles.flagButton} onPress={this.goToPage.bind(this,'Message')}><Text>메시지</Text></TouchableOpacity>
            <TouchableOpacity style={styles.flagButton} onPress={this.goToPage.bind(this,'NewCar')}><Text>신차</Text></TouchableOpacity>
            <TouchableOpacity style={styles.flagButton} onPress={this.goToPage.bind(this,'OldCar')}><Text>중고차</Text></TouchableOpacity>
            <TouchableOpacity style={styles.flagButton} onPress={this.goToPage.bind(this,'SellMycar')}><Text>내차 팔기</Text></TouchableOpacity>
          </View>
      );
  }
}

export default connect(state => ({

}))(Default);
