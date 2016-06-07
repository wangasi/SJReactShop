/**
 * 单品推荐
 */

import React,{Component}     from 'react';
import Tools                 from '../Common/Tools';
import ModuleTitle           from './moduleTitle';
import BrandIconButton       from './buttons/brandIconButton';
import FollowButton          from './buttons/followButton';
import {
    TouchableOpacity,
    StyleSheet,
    ListView,
    Alert,
    View,
    Image,
    Text,
}from 'react-native';

const screenWidth   = Tools.getScreenWidth();
const screenHeigth  = Tools.getScreenHeight();

class SingleRecom extends Component {
    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        this._gotoGoodDetail = this._gotoGoodDetail.bind(this);
    };
    
    _gotoGoodDetail(Id) {
        this.props.navigator.push({name: "detailPage", title:"商品详情", goodId:Id});
    }
    
    _renderRow(rowData, sectionID, rowID) {
        let imgURL = Tools.getPictureAsQuality_500W(rowData.mainImages); 
       return (
            <View  key={rowID} style={{overflow: 'hidden'}}>
                <View style={styles.brandView}>
                    <BrandIconButton 
                        brandId={Number(rowData.brandId)}
                        country={rowData.originalCountry}
                        brandName={rowData.brandName}
                        iconURL={rowData.brandLogo}
                        navigator={this.props.navigator}
                    />
                    <View style={{flex: 1}}></View>
                    <FollowButton brandId={rowData.brandId} follow={rowData.focus}/>
                </View> 
                <TouchableOpacity style={styles.imageView} onPress={() => this._gotoGoodDetail(rowData.goodId)}>
                    <Image style={styles.productImage} 
                        source={{uri: imgURL}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.titleText} allowFontScaling={false}>{rowData.title}</Text>
                <Text style={styles.priceText} allowFontScaling={false}>{rowData.price+'元'}</Text>
            </View>
        )
    }
    
    render() {
        if (!this.props.recomSource || !this.props.recomSource.length) return <View></View>;
        
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let recomData = ds.cloneWithRows(this.props.recomSource);
        return (
          <View style={styles.container}>
               <ModuleTitle title="单品推荐" color="#00b2d1"/>
               <ListView
                    scrollRenderAheadDistance={50}
                    dataSource={recomData}
                    renderRow={this._renderRow}
                    initialListSize={5}
                    enableEmptySections = {true}
                    removeClippedSubviews={true}
               />
          </View>  
        );  
    };
};

var styles = StyleSheet.create ({
    container: {
        flex: 1,
        borderBottomColor:'#eeeeee',
        borderBottomWidth: 5,
        width:screenWidth
    },
    list: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    listView: {
        marginTop: 13,
    },
    goodView: {
        flexDirection: 'column',
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    productImage: {
        height: 190,
        width: 300,
    },
    titleText: {
       margin: 9,
       marginRight: 9,
       fontSize: 16,
       color:'#454045', 
    },
    priceText: {
        color: '#E53400',
        fontSize: 16,
        marginLeft: 9,
    }
});

module.exports = SingleRecom;
