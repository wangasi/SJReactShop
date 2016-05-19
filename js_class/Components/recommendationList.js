/**
 * 单品推荐列表
 */

import React,{Component} from 'react';
import ModuleTitle       from './moduleTitle';
import {
    StyleSheet,
    View,
    Text,
    ListView,
} from 'react-native';

export default class RecomList extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <View style={styles.container} >
                <ModuleTitle title="单品推荐" />
                <ListView 
                    style={styles.listView}
                    contentContainerStyle={styles.list}
                    initialListSize = {12}
                    dataSource = {grabData}
                    renderRow = {this._renderRow}
                    pageSize = {3}
                    enableEmptySections = {true}
                />
            </View>
        )
    }     
};

var styles = StyleSheet.create ({
    container: {
        flex: 1,
    }
});