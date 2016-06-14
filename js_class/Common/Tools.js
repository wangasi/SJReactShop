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
 * 判断用户名是否合法，暂时只包含手机号是否合法
 * 参数：userName, 用户名，string
 * 返回：true - 合法，false - 不合法
 */
function userNameIsValid(userName) {
    var regex = new RegExp('^((13[0-9])|(147)|(15[0-9])|(18[0-9])|(17[0-9]))\\d{8}$');
    return regex.test(userName);
}

/**
 * 判断密码是否有效
 * 参数：password，密码，string
 * 返回：true - 合法，false - 不合法
 */
function passwordIsValid(password) {
    //判断是否符合标准1 不能为同一个字符,不能全是数字,只能有数字、字母和常用特殊字符 长度6-20
    var regex = new RegExp('^[a-zA-Z0-9]{6,20}$');
    return regex.test(password);
}

/**
 * 判断昵称是否有效
 * 参数：nickName，昵称，string
 * 返回：true - 合法，false - 不合法
 */
function nickNameIsValid(nickName) {
    //长度32,特殊字符除了下划线
    var regex = new RegExp('^[\\u4E00-\\u9FA5\\uF900-\\uFA2D\\w]{0,32}+$');
    return regex.test(nickName);
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
    
    userNameIsValid,
    passwordIsValid,
    nickNameIsValid,
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
