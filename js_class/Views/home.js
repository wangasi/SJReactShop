//首页

import React, { Component } from 'react';
import AdjBanner    from '../Components/banner';
import Fetcher      from '../Common/Fetcher';
import StatedBar    from '../Components/statedBar';
import LimitedGrab  from '../Components/limitedGrab';
import ChoiceAct    from '../Components/choiceActivity'; 
import SingleRecom  from '../Components/singleRecom';
import Tools        from '../Common/Tools';
import {
    View,
    Text,
    Animated,
    StyleSheet,
    ScrollView,
    StatusBar,
    Image,
}from 'react-native';

const screenWidth   = Tools.getScreenWidth();
const screenHeigth  = Tools.getScreenHeight();

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerSource: null,
            stateBarSource: null,
            limitGrabSource: null,
            activitySource: null,
            singleRecomSource: null,
        };
    };

    componentWillMount() {
        this._fetchAdjBanner();
        this._fetchStateBar();
        this._fetchLimitedGrab();
        this._fetchActivity();
        this._fetchSingleRecom();
    };
    
    render() {
        let adjArray    = this.state.bannerSource || [];
        let stateArray  = this.state.stateBarSource || []; 
        let grabArray   = this.state.limitGrabSource || [];
        let chicArray   = this.state.activitySource || [];
        let recomArray  = this.state.singleRecomSource || [];
        return (
            <View style={styles.container} >
                <ScrollView style={styles.scrollView}
                    stickyHeaderIndices={[1]}
                    showsVerticalScrollIndicator={true}
                >
                    <AdjBanner adjBannerData={adjArray} navigator={this.props.navigator} />
                    <StatedBar stateBarData={stateArray} navigator={this.props.navigator} />
                    <ChoiceAct chicActivityData={chicArray} navigator={this.props.navigator} />
                    <LimitedGrab grabSource={grabArray} navigator={this.props.navigator} />
                    <SingleRecom recomSource={recomArray} navigator={this.props.navigator}/>
                </ScrollView>
            </View>
        );
    };
    
    /**
     * got net data
     */ 
     _fetchStateBar() {
      Fetcher.getHomeStateBar()
      .then((responseObj) => {
          this.setState ({
              stateBarSource: responseObj
          })
      })  
      .catch((error) => {
        console.log('got error at stateBar: '+ error);
      })
    };
    
    _fetchAdjBanner() {
        Fetcher.getHomeAdjBanner()
        .then((responseObj) => {
            if (!responseObj.adResults || !responseObj.adResults.length) return;
           this.setState ({
               bannerSource: responseObj.adResults
           }) 
        })
        .catch((error) => {
            console.log("got error at adjbanner: " +error);
        });
    };
    
    _fetchLimitedGrab() {
        Fetcher.getHomeLimitedGrab()
        .then((responseObj) => {
            if (responseObj.activity && responseObj.activity['限时抢']) {
                this.setState ({
                    limitGrabSource: responseObj.activity['限时抢']
                }) 
            }   
        })
        .catch((error) => {
            console.log("got error at limitedGrab: " +error);
        });
    };
    
    _fetchActivity() {
        Fetcher.getHomeActivity()
        .then((responseObj) => {
           if (!responseObj.adResults || !responseObj.adResults.length) return;
           this.setState ({
               activitySource: responseObj.adResults
           }) 
        })
        .catch((error) => {
            console.log("got error at adjbanner: " +error);
        });
    }
    
    _fetchSingleRecom() {
        Fetcher.getHomeSingleRecom() 
        .then((responseObj) => {
            if (!responseObj.itemTag || !responseObj.itemTag.单品推荐 || !responseObj.itemTag.单品推荐.length) return;
            this.setState ({
                singleRecomSource: responseObj.itemTag.单品推荐
            })
        })
        .catch((error) => {
            console.log("got error at singleRecom: " +error);
        });
    }
};

var styles = StyleSheet.create ({
   container: {
       flex: 1,
       marginTop: 34,
   },
   scrollView: {
       flexDirection: 'column',
       height: screenHeigth,
   } 
});

module.exports  = Home;