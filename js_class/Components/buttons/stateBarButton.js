/**
 * state bar item button
 */

import React, { Component } from 'react';
import Tools        from '../../Common/Tools';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
} from 'react-native';

const screenWidth   = Tools.getScreenWidth();

class StateBarButton extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onBarButtonClick}>
                    <View style={styles.itemTab}>
                        <Text style={styles.itemText}
                            allowFontScaling={false} >
                            {this.props.name}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.grayLine} ></View>
            </View>
        );
    }
}

var styles = StyleSheet.create ({
   container: {
       flexDirection: 'row',
       alignItems: 'center',
   },
   itemTab: {
      justifyContent: 'center',
      height : 66,
      width: 86/375*screenWidth,
      paddingLeft : 6,
      paddingRight : 6,
      borderBottomWidth : 5,
      borderBottomColor : '#FAFAFA' 
   },
   itemText : {
      color : '#595056',
      fontSize : 15,
      textAlign: 'center',
   },
   grayLine: {
       width: 1,
       height: 15,
       backgroundColor: '#eeeeee'
   }
});

module.exports = StateBarButton;