/*
*  所有网络请求
*/

'use strict'

import ApiURL from './Api';
import Tools  from './Tools';
import React, {
    AsyncStorage
} from 'react-native';
//const assert = require('assert');

function baseNetworkRequery(queryURL, paramer) {
    return new Promise((resolve, reject) => {
        var refer       = Tools.getPlatform();
        var apiVersion  = Tools.getApiVersion();
        var deviceId    = "";
        fetch(queryURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Refer': refer,
               // 'deviceId': deviceId,
               // 'api-v': apiVersion,
            },
            body: paramer,
        })
        .then((response) => response.json())
        .then((responseObj) => {
            //console.log(responseObj);
            if (responseObj.errorcode === '0') {
                resolve(responseObj.data);
            }else {
                if (responseObj.message && responseObj.message.length) {
                    reject(responseObj.message);
                }else {
                    reject("unknow error, may causing by the server");
                }
            }  
        })
        .catch((error) => {
            reject(error);
        });
    });
}

//获取首页banner
function getHomeAdjBanner() {
     var bannerURL   = ApiURL.homeBannerURL+"?adTag=首页幻灯";
     var paramer     = "";
     return baseNetworkRequery(bannerURL, paramer);
}

//获取statebar
function getHomeStateBar() {
     var stateBarURL    = ApiURL.homeStateBarURL+'?criterion={"criterion":"","value":"","byWhat":"","byWhatValue":""}';
     var paramer        = '';
     return baseNetworkRequery(stateBarURL, paramer);
}

//获取限时抢
function getHomeLimitedGrab() {
     var grabURL    = ApiURL.homeGrabURL + '?criterion=[{"criterion":"activity","value":"1006","byWhat":"","byWhatValue":"","sortBy":"upTimeFar","groupBy":"activity"}]&isneedcombine=0&pageIndex=1&pageSize=100';;
     var body       = '';
     return baseNetworkRequery(grabURL, body);
}

//精选活动
function getHomeActivity() {
    let activityURL = ApiURL.homeBannerURL + '?adTag=精选活动';
    let body        = '';
    return baseNetworkRequery(activityURL, body);
}

//单品推荐
function getHomeSingleRecom() {
    let recomURL    = ApiURL.homeRecomURL + '?criterion=[{"criterion":"itemTag","value":"单品推荐","byWhat":"","byWhatValue":"","sortBy":"upTimeFar","groupBy":"goodTags"}]';
    let body        = "";
    return baseNetworkRequery(recomURL, body);
}

/**
 * 关注品牌
 * 参数：品牌Id
 */
function followBrand(brandId) {
    //assert(brandId && typeof brandId === 'number');
    let followURL   = ApiURL.followBrandURL + '?brandId=' + brandId;
    let body        = "";
    return baseNetworkRequery(followURL, body);
}

/**
 * 取消品牌关注
 * 参数：品牌ID
 */
function cancelFollowBrand(brandId) {
    //assert(brandId && typeof brandId === 'number');
    let followURL   = ApiURL.cancelFollowBrandURL + '?brandId=' + brandId;
    let body        = "";
    return baseNetworkRequery(followURL, body);
}

module.exports = {
    getHomeAdjBanner,
    getHomeStateBar,
    getHomeLimitedGrab,
    getHomeActivity,
    getHomeSingleRecom,
    followBrand,
    cancelFollowBrand
}