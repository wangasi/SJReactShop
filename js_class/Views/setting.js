/*
*搜索页
*/
import Tools        from '../Common/Tools';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
}from 'react-native';

const screenWidth       = Tools.getScreenWidth();
const screenHeight      = Tools.getScreenHeight();
const bacImageHeight    = 190 * (screenHeight/667);         //首图的高度
const section_one       = 68 * (screenWidth/375);           //firstView的相对高度
const section_two       = 118 * (screenWidth/375);
const section_two_1     = 50 * (screenWidth/375);
const section_two_2     = 68 * (screenWidth/375);

class SettingPage extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Image source={require('../Images/MineLogo.png')}
                        style={{width: screenWidth, height:bacImageHeight}}
                    />

                    <View style={styles.firstView}>
                        <View style={styles.collectView}>
                            <Text>0</Text>
                            <Text style={styles.collectText} allowFontScaling={false}>收藏的商品</Text>
                        </View>
                        <View style={styles.lineView}></View>
                        <View style={styles.collectView}>
                            <Text>0</Text>
                            <Text style={styles.collectText} allowFontScaling={false}>关注的商品</Text>
                        </View>
                    </View>

                    <View style={styles.backView}></View>

                    <View style={styles.secondView}>
                        <View style={{flexDirection: 'row',alignItems: 'center', height: section_two_1}}>
                            <Text style={[styles.orderText,{marginLeft: 9}]}>我的订单</Text>
                            <View style={{flex: 1}}></View>
                            <Text style={styles.orderText}>查看全部订单</Text>
                            <Image style={{height: 16, width: 16,marginRight: 9}}
                                source={require('../Images/accsessory_arrow_right@2x.png')}
                            />
                        </View>
                        <View style={styles.horizontalView}></View>
                        <View style={styles.orderDetailView}>
                            
                        </View>
                    </View>

                    <View style={styles.backView}></View>
                </ScrollView>
            </View>
    );
    }
};

var styles = StyleSheet.create ({
    container: {
       flex: 1,
       marginTop: -20
   },
   scrollView: {
       flexDirection: 'column',
       height: screenHeight,
   },
   backView: {
       backgroundColor: '#eee',
       height: 6
   },
   firstView: {
       flexDirection: 'row',
       height: section_one,
       alignItems: 'center'
   },
   lineView: {
       width:1,
       backgroundColor:'#eee',
       height:section_one/2
   },
   collectView: {
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center',
       width: screenWidth/2-1
   },
   collectText: {
       fontSize: 12,
       color: '#A0A0A0'
   },
   secondView: {
       flexDirection: 'column',
       height: section_two,
   },
   orderText: {
       fontSize: 14, 
       color:'#A0A0A0'
   },
   horizontalView: {
       backgroundColor: '#eee',
       height: 1
   },
   orderDetailView: {
       flexDirection: 'row',
       height: section_two_2,
   }
});

module.exports = SettingPage;