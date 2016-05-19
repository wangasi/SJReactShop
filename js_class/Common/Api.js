/**
 * Api 接口
 * excupt fetch.js any other file can never know it
 * so i write paramers' base url in tools.js
 */

'use strict';

 //var BASE_ADDRESS    = 'http://api.bestinfoods.com/apiserver/api';
 var BASE_ADDRESS  = 'http://apitest.bestinfoods.com/apiserver/api';
 
 module.exports = {
     //登录模块
     //登录
     loginURL: BASE_ADDRESS + "/login",
     
    //首页模块
    //banner
    homeBannerURL: BASE_ADDRESS + "/ec/queryAds",
    //stateBar
    homeStateBarURL: BASE_ADDRESS + "/ec/queryTopClass",
    //limited grab
    homeGrabURL: BASE_ADDRESS + "/ec/queryItems",
 }

