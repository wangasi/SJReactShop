/**
 *  通用的简单商品Button
 */

import React,{Component} from 'react';
import Tools from '../Common/Tools';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Image,
    Text,
}from 'react-native';

class SimpleGoodButton extends React.Component {

    constructor(props) {
        super(props);
        this._openDetailPage = this._openDetailPage.bind(this);  
    };

    _openDetailPage(id) {
        //alert(id);
        this.props.navigator.push({name: "detailPage", title:"商品详情", goodId:id});
    };

    render() {
        let imageURL = Tools.getPictureAsQuality_200W(this.props.imgURL);
        let id = this.props.goodId;
        var nav = this.props.navigator;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this._openDetailPage(id)} style={styles.touchButton}>
                    <Image style={styles.goodImage} resizeMode="contain"
                        source={{uri: imageURL}}
                    ></Image>
                    <Text style={styles.descText} numberOfLines={2} allowFontScaling={false}>
                        {this.props.desc}
                    </Text>
                </TouchableOpacity>
                <View style={styles.priceText}>
                        <Text style={styles.curPriceText} allowFontScaling={false}>
                            {this.props.curPrice}
                        </Text>
                        <Text style={styles.yuanText} allowFontScaling={false}>
                            元
                        </Text>
                        <Text style={styles.oldPriceText} allowFontScaling={false}>
                            {'￥'+this.props.oldPrice}
                        </Text>
                    </View>
            </View>
        )
    }
}

var styles = StyleSheet.create ({
    oldPriceText: {
        textDecorationLine: "line-through",
        marginTop: 5,
        marginLeft:4,
        fontSize: 9,
        color: '#bbbbbb',
    },
    yuanText: {
        fontSize:9, 
        color:'#ff5400',
        marginTop:6
    },
    curPriceText: {
        fontSize: 15,
        marginLeft:4,
        color: '#ff5400',
    },
    descText: {
        marginTop: 4,
        marginLeft:4,
        marginRight:8,
        fontSize: 15,
        width: 150,
        color:'#595056',
    },
    priceText: {
        flexDirection: 'row',
        marginTop: 4
    },
    goodImage: {
        height: 101,
        width: 168,
    },
    touchButton: {
        flexDirection: 'column',
        height: 146,
        width: 168,
    },
    container: {
        flexDirection: 'column',
        height: 180,
        width: 168,
        marginLeft: 9,
    }
})

module.exports = SimpleGoodButton;