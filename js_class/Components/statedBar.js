/**
 * 横向类目条
 */

import React, {Component} from 'react';
import Tools        from '../Common/Tools';
import BarButton    from './stateBarButton';
import {
    StyleSheet,
    Text,
    Alert,
    ScrollView,
    View
}from 'react-native';

class StatedBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleCateChage(pageId, pageName) {
         Alert.alert(pageName);
    };
    
    _renderNextButtons() {
        var me = this;
        let barData = this.props.stateBarData;
        return barData.map(function (item, index) {
            return <BarButton name={item.name} key={index} 
                        onBarButtonClick={() => me.handleCateChage(item.id, item.name)} />
        });
    };
    
    _renderBarButtons() {
        return (
            <ScrollView style={styles.barPreButtons}
               horizontal={true} showsHorizontalScrollIndicator={false}>
                <BarButton name="推荐" />
                <BarButton name="品牌团" onBarButtonClick={() => {
                    this.props.navigator.replace({name: "品牌团"});
                }} />
                {this._renderNextButtons()}
            </ScrollView>
        )
    };
    
    render() {
        return (
            <ScrollView style={styles.container} >
                {this._renderBarButtons()}
            </ScrollView>
        )
    };
}

var styles = StyleSheet.create ({
    container: {
        flex: 1
    },
    barPreButtons: {
        flexDirection: 'row',
    }
})

module.exports = StatedBar;