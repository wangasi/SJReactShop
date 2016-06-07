/**
 * 精选活动
 */

import React,{Component} from 'react';
import ModuleTitle       from './moduleTitle';
import Tools             from '../Common/Tools';
import {
    TouchableWithoutFeedback,
    LayoutAnimation,
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
        this.state = {
            views: [],
        }
        this._renderRows = this._renderRows.bind(this);
        this._onPressRemoveView = this._onPressRemoveView.bind(this);
        this._onActivityButtonClick = this._onActivityButtonClick.bind(this);
    };
    
    componentWillUpdate() { LayoutAnimation.spring(); }
    
    _onActivityButtonClick(adjURL: string) {
        //this.props.navigator.push({ name: 'WebPage',url: adjURL });
        this.setState((state) => ({views: [...state.views, {}]}));
    };
    
    _onPressRemoveView() { this.setState((state) => ({views: state.views.slice(0, -1)})); }
    
    _renderRows(rowData, sectionID, rowID) {
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
        const views = this.state.views.map((view, i) => 
            <View key={i} style={styles.view}> 
                <Text onPress={this._onPressRemoveView} style={{width: 20,height:20}}>{i}</Text> 
            </View>
        );
        
        if (!this.props.chicActivityData || !this.props.chicActivityData.length) 
            return <View></View>;
        
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let activityData = ds.cloneWithRows(this.props.chicActivityData);
        
        return (
            <View style={styles.grabView}>
                {views}
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
    view: { height: 54, width: 54, backgroundColor: 'red', margin: 8, alignItems: 'center', justifyContent: 'center', },
});