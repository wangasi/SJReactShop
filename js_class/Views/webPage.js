/*
*  webView 加载h5 info
*/

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    WebView,
}from 'react-native';

class WebPage extends React.Component{
    constructor(props) {
        super(props);  
    };
    
    render() {
        return (
            <View style={styles.container} >
                <Text>webView</Text>
            </View>
        );
    }
};

var styles = StyleSheet.create ({
   container: {
       flex: 1,
   },
});

module.exports = WebPage;