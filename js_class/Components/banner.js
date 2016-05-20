/*
*   banner component 
*/
'use strict';

import React, { Component } from 'react';
import ViewPager    from 'react-native-viewpager';
import Tools        from '../Common/Tools';
import {
    TouchableWithoutFeedback,
    View,
    Text,
    Alert,
    StyleSheet,
    StatusBar,
    Image,
} from 'react-native';

const screenWidth   = Tools.getScreenWidth();
const screenHeigth  = Tools.getScreenHeight();

type Adj = {
  id: number;
  name: string;
  img: Array<string>;
};

type Props = {
    adjBannerData: Array<Adj>;
    navigator: Navigator;
};

class AdjBanner extends React.Component {
    props: Props;
    
    constructor(props) {
        super(props);
        this._onBannerItemClicked = this._onBannerItemClicked.bind(this);
        this._renderBannerItems = this._renderBannerItems.bind(this);
    };
    
    /*
    * jump as action's detail 
    * URL: go to webview
    * paramer: paramers next page needs
    */
    _onBannerItemClicked(adjURL: string) {
         this.props.navigator.push({ name: 'WebPage',url: adjURL });
    };
    
    _renderBannerItems(item: object, pageId: number|string) {
        var bannerURL = Tools.bannerBaseURL+item.id;
        let imgURL  = Tools.getPictureAsQuality_500W(item.img[0]);
            return (
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => this._onBannerItemClicked(imgURL)} >
                        <Image source = {{uri: imgURL}} 
                            resizeMode = "contain"
                            style={styles.bannerImage} />
                    </TouchableWithoutFeedback>
                </View>
            );
    };
    
    /*
    * render banner with parent's data
    * if data is null return null
    */
    render() {
        let tempData = this.props.adjBannerData;
         if (!tempData || !tempData.length) return <View></View>;
         let loop    = tempData.length > 1 ? true : false;
        let dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2 });
        let bannerData = dataSource.cloneWithPages(tempData);
        return (
            <View style={styles.container}>
                <ViewPager dataSource={bannerData}
                  style = {styles.viewPage}
                  renderPage = {this._renderBannerItems}
                  isLoop = {loop} 
                  autoPlay = {true} />
            </View>
        );
    }
}

var styles = StyleSheet.create ({
   container: {
       flex: 1
   },
   viewPage: {
     height: 236,
     width:  screenWidth 
   },
   bannerImage: {
       height: 236,
       width: screenWidth
   }
});

module.exports = AdjBanner;