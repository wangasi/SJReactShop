/**
 * 品牌控件
 * icon: url, string
 * brandName: 品牌名称, string
 * country: 归属地（国家, string
 * navigator: 导航, Navigator
 * brandId: 品牌ID, number  
 */

import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class BrandIconButton extends Component {
    constructor(props) {
        super(props);
        this._gotoBrandDetail = this._gotoBrandDetail.bind(this);
    }
    
    _gotoBrandDetail(brandID, navigator) {
        //assert(typeof brand === 'number', 'must pass brandId when goto brand detail.');
        //assert(navigator && typeof navigator === 'object', 'must pass navigator when goto brand detail.');
        navigator.push({name: "brandDetail", title:"品牌详情", brandId:brandID});
    };
      
    render() {
        let imgURL  = this.props.iconURL.replace(/bestinfoods-dec.oss-cn-hangzhou.aliyuncs.com/g ,"desc.bestinfoods.com");
        imgURL      = imgURL + '@40w_40h';
        return (
                <TouchableOpacity style={styles.button}
                    onPress={() => this._gotoBrandDetail(this.props.brandId, this.props.navigator)} >
                    <Image style={styles.icon} source={{uri: imgURL}} resizeMode="contain"/>
                    <View style={styles.textView} >
                        <Text style={styles.nameText} allowFontScaling={false}>
                            {this.props.brandName}
                        </Text>
                        <Text style={styles.countryText} allowFontScaling={false}>
                            {this.props.country}
                        </Text>
                    </View>
                </TouchableOpacity>      
        );
    }
};

var styles = StyleSheet.create ({
    button: {
        flexDirection: 'row',
        height: 40,
        width: 80,
    },
    icon: {
        marginLeft: 9,
        width: 40,
        height: 40
    },
    textView: {
      flexDirection: 'column',
      marginLeft: 4,
      marginTop: 5  
    },
    nameText: {
        fontSize: 14,
        color: '#595056'
    },
    countryText: {
        marginTop: 2,
        fontSize: 10,
        color: '#A8A9AB'
    },
});