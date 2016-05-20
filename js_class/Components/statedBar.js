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
        this.handleCateChage = this.handleCateChage.bind(this);
    }
    
    handleCateChage(pageId, pageName) {
         this.props.navigator.push({name: "searchPage", categoryId:pageId, title:pageName});
    };
    
    _renderNextButtons() {
        var me = this;
        let barData = this.props.stateBarData;
        return barData.map(function (item, index) {
            return <BarButton name={item.name} key={index} 
                        onBarButtonClick={() => me.handleCateChage(item.id, item.name)} />
        });
    };
    
    render() {
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
}

var styles = StyleSheet.create ({
    barPreButtons: {
        height: 66,
        flexDirection: 'row',
        backgroundColor: 'white'
    }
})

module.exports = StatedBar;