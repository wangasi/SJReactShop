/**
 * 单品推荐单个商品显示图
 * 
 */

import React,{Component} from 'react';
import Tools             from '../Common/Tools';
import BrandStrip        from './brandStrip';
import {
    TouchableWithoutFeedback,
    StyleSheet,
    ListView,
    Image,
    View,
    Text,
} from 'react-native';

export default class SingleGood extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let rowArray    = this.props.goodData;
        if (!rowArray || !rowArray.length) return <View></View>;
        
    }
}

var styles = StyleSheet.create ({
    
});

