/**
 * 首页单品底部控件
 * goodId: 商品ID， number
 * reviewNum: 评论数，number
 */

'use strict'
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
}from 'react-native';

export default class RecomFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentCount: 0
        }
        this._gotoCommentView = this._gotoCommentView.bind(this);
    };

    componentWillReceiveProps(nextProps) {
        this.setState ({
            commentCount: nextProps.commentCount || 0
        });
    };

    _gotoCommentView() {

    };

    render() {
        <View style={styles.container}>
            <Text allowFontScaling={false}
                style={styles.commentText}
                onPress={this._gotoCommentView}
            >
                评论晒单
            </Text>
            <Text style={styles.reviewNumText} allowFontScaling = {false}>{'('+this.props.reviewNum+')'}</Text>
            <View style={{flex:1}}></View>
           <View style={{width: 1, height: 18, backgroundColor: '#D1D3D4'}}></View>
           <TouchableOpacity style={{width:44, alignItems:'center'}} onPress={this.onFocusClicked}>
             <Image
               source={{uri: collectionUrl}}
               style={styles.likeImage}
               resizeMode={Image.resizeMode.contain}>
             </Image>
           </TouchableOpacity>
           <View style={{width: 1, height: 18, backgroundColor: '#D1D3D4'}}></View>
           <TouchableOpacity style={{width:44, alignItems:'center'}}
             onPress={this.openShareView}>
             <Image source={{uri: 'http://bestinfoods.oss-cn-hangzhou.aliyuncs.com/Mobile%2FreactImage%2FnavShare.png'}}
               style={styles.shareImage}
               resizeMode={Image.resizeMode.contain}></Image>
           </TouchableOpacity>
        </View>
    }
}

var styles = StyleSheet.create ({
    container: {
        height: 51,
        alignItems: 'center',
        flexDirection: 'row'
    },
    commentText: {
        fontSize: 16, 
        color: '#2F232B'
    }
})