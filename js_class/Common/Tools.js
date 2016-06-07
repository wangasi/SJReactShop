/*
*   提供重复性高的，工具性函数
*/
import Dimensions   from 'Dimensions';
import React, {
    NetInfo,
    Platform,
}from 'react-native';

/**
 * public fuctions
 */
function getPlatform() {
    let platform = "";
    if (Platform.OS === "ios")
        platform = "IOS";
    else 
        platform = "Android";
    return platform;
}

function getApiVersion() {
    return "1.0.0";
}

function getScreenWidth() {
    return Dimensions.get('window').width;
}

function getScreenHeight() {
    return Dimensions.get('window').height;
}

function getPictureAsQuality_500W(url) {
    return pictureQuality_Base(url, 500, 85);
}

function getPictureAsQuality_200W(url) {
    return pictureQuality_Base(url, 200, 85);
}

/**
 * paramers' base url prevent api unclear cirumstances
 */
module.exports = {
    getPlatform,
    getApiVersion,
    getScreenWidth,
    getScreenHeight,
    getPictureAsQuality_500W,
    getPictureAsQuality_200W,
    
    /**
     * banner jump to webView base url
     */
    bannerBaseURL: 'http://m.bestinfoods.com/index.php?m=Mobile&c=Activity%2FSpecial&a=featuredDet&id='
}


/**
 * private functions can only call in this file
 */
function pictureQuality_Base(imgURL, width, quality) {
    /**
     * It's to deal with picture as network changes
     * when at 4g/3g turn down the quality
     * in wifi use best quality,and 2g turn to worst quality
     */
    return imgURL+'@'+width+'w_Q'+quality;
    
     // NetInfo.fetch().done((reach) => {
    //    if (reach === 'wifi') {
    //        return imgURL+'@'+width+'w_Q'+quality;
    //    }else if (reach === 'cell') {
    //        return imgURL+'@'+width+'w_Q'+(quality/2);
    //    }else {
    //        //offline 暂时未处理
    //    }
    // });

}
