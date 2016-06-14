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

/**
 * 只有当errorcode为0时，返回数据
 * 其他皆返回为错误
 */
function baseNetworkRequery(requeryWay,queryURL, paramer) {
    return new Promise((resolve, reject) => {
        var refer       = Tools.getPlatform();
        var apiVersion  = Tools.getApiVersion();
        var deviceId    = "";
        fetch(queryURL, {
            method: requeryWay,
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
            console.log(responseObj);
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
            JSON.parse(erro);
            console.log(error);
            reject(error);
        });
    });
}

//获取首页banner
function getHomeAdjBanner() {
     var bannerURL   = ApiURL.homeBannerURL+"?adTag=首页幻灯";
     var paramer     = "";
     return baseNetworkRequery('POST',bannerURL, paramer);
}

//获取statebar
function getHomeStateBar() {
     var stateBarURL    = ApiURL.homeStateBarURL+'?criterion={"criterion":"","value":"","byWhat":"","byWhatValue":""}';
     var paramer        = '';
     return baseNetworkRequery('POST',stateBarURL, paramer);
}

//获取限时抢
function getHomeLimitedGrab() {
     var grabURL    = ApiURL.homeGrabURL + '?criterion=[{"criterion":"activity","value":"1006","byWhat":"","byWhatValue":"","sortBy":"upTimeFar","groupBy":"activity"}]&isneedcombine=0&pageIndex=1&pageSize=100';;
     var body       = '';
     return baseNetworkRequery('POST',grabURL, body);
}

//精选活动
function getHomeActivity() {
    let activityURL = ApiURL.homeBannerURL + '?adTag=精选活动';
    let body        = '';
    return baseNetworkRequery('POST',activityURL, body);
}

//单品推荐
function getHomeSingleRecom() {
    let recomURL    = ApiURL.homeRecomURL + '?criterion=[{"criterion":"itemTag","value":"单品推荐","byWhat":"","byWhatValue":"","sortBy":"upTimeFar","groupBy":"goodTags"}]';
    let body        = "";
    return baseNetworkRequery('POST',recomURL, body);
}

/**
 * 关注品牌
 * 参数：品牌Id
 */
function followBrand(brandId) {
    //assert(brandId && typeof brandId === 'number');
    let followURL   = ApiURL.followBrandURL + '?brandId=' + brandId;
    let body        = "";
    return baseNetworkRequery('POST',followURL, body);
}

/**
 * 取消品牌关注
 * 参数：品牌ID
 */
function cancelFollowBrand(brandId) {
    //assert(brandId && typeof brandId === 'number');
    let followURL   = ApiURL.cancelFollowBrandURL + '?brandId=' + brandId;
    let body        = "";
    return baseNetworkRequery('POST',followURL, body);
}

/**
 * 登陆
 * 参数：userName, 手机号，string
 *      password, 密码，  string
 *      checkCode，验证码, string
 */
function loginWithPhoneNumber(userName, password, checkCode) {
    let logURL  = ApiURL.loginURL + '?username=' + userName + '&password=' + password + '&checkCode='+checkCode;
    //let body    = JSON.stringify(params);
    let body = "";
    return baseNetworkRequery('POST', logURL, body);
}

module.exports = {
    getHomeAdjBanner,
    getHomeStateBar,
    getHomeLimitedGrab,
    getHomeActivity,
    getHomeSingleRecom,
    followBrand,
    cancelFollowBrand,
    loginWithPhoneNumber,
}