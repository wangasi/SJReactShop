/**
 * 单品推荐 商品控件
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class RecomList extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <View style={styles.container} >
            </View>
        )
    }     
};

var styles = StyleSheet.create ({
    container: {
        flex: 1,
    }
});