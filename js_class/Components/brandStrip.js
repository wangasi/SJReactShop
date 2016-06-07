/**
 * 品牌条，包含关注
 * 
 * brandData: <Array>, 品牌数据
 */

import BrandIconButton      from './buttons/brandIconButton';
import FollowButton         from './buttons/followButton';
import React, {Component}   from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';

export default class BrandStrip extends Component {
   constructor(props) {
       super(props);
   }  
   
   render() {  
       return (
          <View style={styles.container}>
               <BrandIconButton 
                    brandId={this.props.brandId}
                    country={this.props.originalCountry}
                    brandName={this.props.brandName}
                    iconURL={this.props.brandLogo}
                    navigator={this.props.navigator}
               />
               <FollowButton followState={this.props.follow}/>
          </View>  
       );
   }
};

var styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        height: 40
    }
});

