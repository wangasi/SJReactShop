/*
*  所有网络请求
*/

'use strict'

import ApiURL from './Api';
import Tools  from './Tools';
import React, {
    AsyncStorage
} from 'react-native';

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

function getHomeActivity() {
    let activityURL = ApiURL.homeBannerURL + '?adTag=精选活动';
    let body        = '';
    return baseNetworkRequery(activityURL, body);
}

module.exports = {
    getHomeAdjBanner,
    getHomeStateBar,
    getHomeLimitedGrab,
    getHomeActivity
}