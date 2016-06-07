/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Home          from './js_class/Views/home.js';
import Login         from './js_class/Views/login.js';
import SettingPage   from './js_class/Views/setting.js';
import Detail        from './js_class/Views/detailPage.js';
import Error         from './js_class/Views/errorPage.js';
import WebPage       from './js_class/Views/webPage';
import Search        from './js_class/Views/search';
import DetailBrand   from './js_class/Views/brandDetail.js';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Navigator,
  StatusBar,
  TabBarIOS,
  Text,
  View
} from 'react-native';

class SJReactShop extends Component {
  constructor(props) {
     super(props);
     this.state = {
       selectedTab: 'homeTab'
     }
     this._renderIndexPageOfBar = this._renderIndexPageOfBar.bind(this);  
  };
  
  _renderScene(route, nav) {
    switch(route.name) {
      case 'home':
          return <Home navigator={nav} />;
      case 'login':
          return <Login navigator={nav} />;
      case 'setting':
          return <SettingPage navigator={nav} />;
      case 'detailPage':
          return <Detail navigator={nav} goodId={route.goodId}/>;
      case 'webPage':
          return <WebPage navigator={nav} bannerURL={route.url} />;
      case 'searchPage':
          return <Search navigator={nav} categoryId={route.cateId}/>;
      case 'brandDetail':
          return <DetailBrand navigator={nav} brandId={route.brandId} />;
      default: 
          return <Error navigator={nav} />;
    }
  };
  
  _renderNavigationBar() {
    return (
      <View style={styles.navigationBar}>
        <Text>导航条</Text>
      </View>
    )
  };
  
  _renderIndexPageOfBar(pageName, pageTitle) {
      let navBar = pageName === 'setting' ? null : <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}/>;
      return (
        <Navigator 
         configureScene = {(route) => {
            if (route.seceneConfig) return route.sceneConfig;
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
          initialRoute={{name: pageName, title:pageTitle,index:0}}
          renderScene={this._renderScene}
          navigationBar={ navBar}
        />
      );
  };
  
  render() {
    let homeIcon              = require('./js_class/Images/Tabbar_HomePage@2x.png');
    let shopIcon              = require('./js_class/Images/Tabbar_ShoppingCart@2x.png');
    let settingIcon           = require('./js_class/Images/Tabbar_Mine@2x.png');
    return (
      <TabBarIOS tintColor={"red"}>
        <TabBarIOS.Item 
          title= "首页"
          icon = {homeIcon}
          selected = {this.state.selectedTab === 'homeTab'}
          onPress = {() => {
            this.setState ({selectedTab: 'homeTab'});
          }}
        >
            {this._renderIndexPageOfBar('home', '首页')}
        </TabBarIOS.Item>
        <TabBarIOS.Item 
          icon={shopIcon}
          title = "购物车"
          selected = {this.state.selectedTab === 'shopTab'}
          onPress = {() => {
            this.setState ({selectedTab: 'shopTab'});
          }}
        >
            {this._renderIndexPageOfBar('shop', '购物车')}
        </TabBarIOS.Item>
        <TabBarIOS.Item 
          icon={settingIcon}
          title = "我的"
          selected = {this.state.selectedTab === 'settingTab'}
          onPress = {() => {
            this.setState ({selectedTab: 'settingTab'});
          }}
        >
            {this._renderIndexPageOfBar('setting', '个人中心')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

function newRandomRoute() {
  return {
    title: '#' + Math.ceil(Math.random() * 1000),
  };
}


var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title} 
      </Text>
    );
  },

};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'yellow',
  },
   navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: "blue",
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: "blue",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navigationBar: {
    flexDirection: "row",
    height: 64,
    backgroundColor:'gray',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('SJReactShop', () => SJReactShop);
