/**
 * 关注按钮
 */

import IconButton           from './brandIconButton';
import FollowButton         from './followButton';
import Fetcher              from '../../Common/Fetcher';
import React, {Component}   from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class BrandStrip extends Component {
   constructor(props) {
       super(props);
       this.state = {
           followSate: false
       }
       
       this._followButtonDown = this._followButtonDown.bind(this);
   }  
   
   componentWillMount() {
       this.setState({
           followSate: this.props.follow
       })
   }
   
   _followButtonDown() {
       let status = this.state.followSate;
       if (status) {
            Fetcher.cancelFollowBrand(this.props.brandId)
            .then((responseObj) => {
                console.log(responseObj,'---------');
            })
            .catch((error) => {
                console.log("got error at cancelFollowBrand: " +error);
            });
       }else {
           Fetcher.followBrand(this.props.brandId)
           .then((responseObj) => {
               console.log(responseObj,'---------');
           })
           .catch((error) => {
                console.log("got error at followBrand: " +error);
            });
       }
   }
   
   render() {  
       let activeStyle = this.state.followSate ? styles.likeActive : styles.likeButton,
          focusText   = this.state.followSate ? styles.focusText : styles.likeText;
       let focusTitle  = this.state.followSate ? '已关注' :'关注';
       return (
          <TouchableOpacity style={activeStyle} onPress={this._followButtonDown}>
            <Text style={focusText} allowFontScaling={false}>{focusTitle}</Text>
            <View style={{width: 11}} ></View>
          </TouchableOpacity>
       );
   }
};

var styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    likeText: {
        fontSize: 14,
        textAlign: 'center',
    },
    focusText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
    },
    likeButton: {
        width: 52,
        height: 26,
        marginTop: 3,
        marginRight: 9,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    likeActive: {
        backgroundColor: '#C9CACB',
        width: 52,
        height: 26,
        marginTop: 3,
        marginRight: 9,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
});
