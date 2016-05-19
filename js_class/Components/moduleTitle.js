/**
 * 每个模块的标题 传入参数：标题和颜色
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class ModuleTitle extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        let pranetStyle = this.props.color ? {color: this.props.color} : {};
        let viewStyle = this.props.color ? {borderBottomColor: this.props.color} : {};
        return (
            <View style={styles.grabView}>
                <Text style={[styles.grabText, pranetStyle]} 
                    allowFontScaling={false}>
                    {this.props.title}
                </Text>
                <View style={[styles.titleView, viewStyle]}></View>
            </View>
        )
    }     
};

var styles = StyleSheet.create ({
     grabView: {
        flexDirection:'column',
        marginTop:26,
        alignItems:'center',
        justifyContent:'center'   
    },
    grabText: {
        color: 'blue',
        fontSize: 18,   
    },
    titleView: {
        marginTop: 3,
        width: 40,
        alignItems: 'center',
        borderBottomWidth : 2,
        borderBottomColor : 'blue'
    },
});