/**
 * 精选活动
 */

import React,{Component} from 'react';
import ModuleTitle       from './moduleTitle';
import Tools             from '../Common/Tools';
import {
    TouchableWithoutFeedback,
    StyleSheet,
    ListView,
    Image,
    View,
    Text,
} from 'react-native';

type Props = {
    chicActivityData: Array;
    navigator: Navigator;
};

const screenWidth   = Tools.getScreenWidth();

export default class ChoiceActivity extends Component {
    props: Props;
    
    constructor(props) {
        super(props);
        this._renderRows = this._renderRows.bind(this);
        this._onActivityButtonClick = this._onActivityButtonClick.bind(this);
    };
    
    _onActivityButtonClick(adjURL: string) {
        this.props.navigator.push({ name: 'WebPage',url: adjURL });
    };
    
    _renderRows(rowData, sectionID, rowID) {
        console.log(rowData);
        var actURL = Tools.bannerBaseURL+rowData.id;
        let imgURL  = Tools.getPictureAsQuality_500W(rowData.img[0]);
        return (
           <View>
                <TouchableWithoutFeedback onPress={() => this._onActivityButtonClick(actURL)}>
                    <Image style={{marginTop:3,width: 375,height: 153}} 
                        source={{uri: imgURL}}>
                    </Image>
                </TouchableWithoutFeedback>
           </View>
        )
    };
    
    render() {
        if (!this.props.chicActivityData || !this.props.chicActivityData.length) 
            return <View></View>;
        
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let activityData = ds.cloneWithRows(this.props.chicActivityData);
        
        return (
            <View style={styles.grabView}>
                <ModuleTitle title="精选活动" color="#FF4202"/>
                <ListView 
                    initialListSize = {8}
                    enableEmptySections = {true}
                    dataSource={activityData}
                    renderRow={this._renderRows}
                />
            </View>
        )
    }     
};

var styles = StyleSheet.create ({
     grabView: {
        flexDirection:'column',
        marginTop:9,
        alignItems:'center',
        justifyContent:'center'   
    },
    grabText: {
        color: 'blue',
        fontSize: 18,   
    },
    titleView: {
        marginTop: 3,
        width: 40,
        alignItems: 'center',
        borderBottomWidth : 2,
        borderBottomColor : 'blue'
    },
});