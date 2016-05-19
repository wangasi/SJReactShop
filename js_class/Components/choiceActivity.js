/**
 * 精选活动
 */

import React,{Component} from 'react';
import ModuleTitle       from './moduleTitle';
import {
    TouchableWithoutFeedback,
    StyleSheet,
    ListView,
    View,
    Text,
} from 'react-native';

export default class ChoiceActivity extends Component {
    constructor(props) {
        super(props);
    };
    
    _onActivityButtonClick() {
        
    };
    
    _renderRows(rowData, sectionID, rowID) {
        return (
            <TouchableWithoutFeedback onPress={() => this._onActivityButtonClick}>
                <Image style={{marginTop:3,height: 153,flex:1}}
                    source={{uri: imgurl}}
                />
            </TouchableWithoutFeedback>
        )
    };
    
    render() {
        return (
            <View style={styles.grabView}>
                <ModuleTitle title="精选活动" color="#FF4202"/>
                <ListView 
                />
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