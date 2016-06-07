/**
 * 限时抢
 */

import React,{Component}     from 'react';
import SimpleGoodButton      from './buttons/simpleGoodButton';
import Tools                 from '../Common/Tools';
import ModuleTitle           from './moduleTitle';
import {
    StyleSheet,
    ListView,
    Alert,
    View,
    Text,
}from 'react-native';

const screenWidth   = Tools.getScreenWidth();
const screenHeigth  = Tools.getScreenHeight();

class LimitedGrab extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           hourTime: 0,
           minTime: 0,
           secTime: 0,
       };  
       this.endDate = 0;
       this.setTime = false;
       this._renderRow = this._renderRow.bind(this);
    };
    
    componentWillUnmount() {
      this.timer && clearInterval(this.timer);  
    };
    
    _renderRow(rowData, sectionID, rowID) {
        return (
            <SimpleGoodButton goodId={rowData.goodId}
                imgURL = {rowData.mainImages}
                desc = {rowData.title}
                curPrice = {rowData.price}
                oldPrice = {rowData.msrp}
                navigator = {this.props.navigator}
            />
        )
    };
    
    _setStartTime(timeData) {
        if (this.setTime) return;
        this.setTime = true;
        var startTime = timeData.activityStartTime;
        var endTime   = timeData.activityEndTime;
        var startDate = new Date(parseInt(startTime));
        var endDate   = new Date(parseInt(endTime));
        
        //当前时间与开始时间比较
        if ((new Date()).getTime() > startDate.getTime()) {
            //与结束时间比较
            if ((new Date()).getTime() > endDate.getTime()) {
              Alert.alert('提示',"活动已结束");
            }else {
              var dateBet = endDate.getTime() - (new Date()).getTime();
              this.endDate = endDate;
              this.countDown();
            }
        }
    };
    
  countDown() {
    this.timer = setInterval(() => {
      var dateBet = this.endDate.getTime() - (new Date()).getTime();
      if (!dateBet) {clearInterval(this.countdownTimer);}
      var days    = Math.floor(dateBet/(24*3600*1000));
      var leave1  =dateBet%(24*3600*1000);    //计算天数后剩余的毫秒数
      var hours   =Math.floor(leave1/(3600*1000));
      var leave2  =leave1%(3600*1000);        //计算小时数后剩余的毫秒数
      var minutes =Math.floor(leave2/(60*1000));
      var leave3  =leave2%(60*1000);      //计算分钟数后剩余的毫秒数
      var seconds =Math.round(leave3/1000);
      this.setState({
        //hourTime: hours+days*24,
        hourTime: hours,
        minTime: minutes,
        secTime: seconds,
      });
    }, 1000);
  };

    render() {
        if (!this.props.grabSource || !this.props.grabSource.length) return <View></View>;
        
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let grabData = ds.cloneWithRows(this.props.grabSource);
        this._setStartTime(this.props.grabSource[0]);
        return (
            <View style={styles.container}>
                <ModuleTitle title="限时抢" color="#fc295d"/>
                <View style={styles.countTimeView}>
                    <Text style={styles.descText} allowFontScaling={false}>距离本场结束</Text>
                    <View style={styles.textBackView}>
                        <Text style={styles.hourText} allowFontScaling={false}>{this.state.hourTime}</Text>
                    </View>
                    <Text style={styles.viewOneText} allowFontScaling={false}>:</Text>
                    <View style={styles.textTwoBackView}>
                        <Text style={styles.miniteText} allowFontScaling={false}>{this.state.minTime}</Text>
                    </View>
                    <Text style={styles.viewTwoText} allowFontScaling={false}>:</Text>
                    <View style={styles.textTwoBackView}>
                        <Text style={styles.secText} allowFontScaling={false}>{this.state.secTime}</Text>
                    </View>
                </View>
                <ListView 
                    style={styles.listView}
                    contentContainerStyle={styles.list}
                    initialListSize = {8}
                    dataSource = {grabData}
                    renderRow = {this._renderRow}
                    pageSize = {2}
                    enableEmptySections = {true}
                />
                <View style={styles.footerView}>
                    <Text style={styles.nextText} allowFontScaling={false}>下节预告</Text>
                    <Text style={styles.nextDescText} allowFontScaling={false}>{0}</Text>
                    <Text style={styles.startText} allowFontScaling={false}>开始</Text>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create ({
    container: {
        flex: 1,
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 3,  
    },
    list: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    listView: {
        marginTop: 13,
    },
    countTimeView: {
        marginTop:-13,
        marginLeft: screenWidth-130,
        flexDirection:'row',
        height:13,
        width:124
    },
    descText: {
        color: '#dfdfdf',
        marginTop: -1,
        fontSize: 12,
    },
    textBackView: {
        marginLeft: 3,
        backgroundColor: '#464044',
        width:14,
        height:13,
        alignItems:'center', 
        justifyContent:'center'  
    },
    textTwoBackView: {
        backgroundColor: '#464044',
        width:14,
        height:13,
        alignItems:'center', 
        justifyContent:'center'  
    },
    hourText: {
        fontSize: 10,
        color: 'white',
    },
    viewOneText: {
        color: 'gray',
    },
    miniteText: {
        fontSize: 10,
        color: 'white',
    },
    secText: {
        fontSize: 10,
        color: 'white',
    },
    footerView: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#FAFAFA',
        height: 32,
    },
    nextText: {
        fontSize: 16,
        color: 'gray',
    },
    nextDescText: {
        marginLeft: 2,
        color:'#333133',
        fontSize: 16,
    },
    startText: {
        marginLeft: 2,
        fontSize: 16,
        color: 'gray'
    }
})

module.exports = LimitedGrab;