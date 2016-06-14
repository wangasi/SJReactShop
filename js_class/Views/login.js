//登录

import Tools        from '../Common/Tools';
import Fetcher      from '../Common/Fetcher';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    TextInput,
    StyleSheet,
    TouchableOpacity
}from 'react-native';

const screenWidth       = Tools.getScreenWidth();
const screenHeight      = Tools.getScreenHeight();
const imageHeight       = 261 * (screenHeight/667);

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            checkCode: '',
            userValid: false,
            passValid: false,
        }
        this._popToPreview  = this._popToPreview.bind(this);
        this._startLogin    = this._startLogin.bind(this); 
        this._judgePhoneNumber = this._judgePhoneNumber.bind(this);
        this._judgePassword = this._judgePassword.bind(this);
    };

    _popToPreview() {
        this.props.navigator.pop();
    };

    /**
     * 开始登陆
     * 1）当密码框输入结束的时候
     * 2）当点击登陆按钮时
     */
    _startLogin() {
        let phone = this.state.userName;
        let psd   = this.state.password;
        let code  = this.state.checkCode;
        Fetcher.loginWithPhoneNumber(phone, psd, code)
        .then((responseObj) => {
            console.log(responseObj);
        })
        .catch((error) => {
            console.log('error with login: ' + error);
        })
    };

    _judgePhoneNumber(userName) {
        this.setState({userName: userName})
        if (!Tools.userNameIsValid(userName)) 
            this.setState({userValid: false});
        else
            this.setState({userValid: true});
        //校验正确后，可以添加其他操作
    };

    _judgePassword(passWord) {
        this.setState({password: passWord});
        if (!Tools.passwordIsValid(passWord))
            this.setState({passValid: false});
        else
            this.setState({passValid: true});
    };

    render() {
        let phoneStyle = this.state.userValid ? null : {borderColor: 'red', borderWidth: 1};
        let passStyle  = this.state.passValid ? null : {borderColor: 'red', borderWidth: 1};
        let loginButtonAble = !(this.state.userValid && this.state.passValid);
        let logStyle   = loginButtonAble ? {backgroundColor: 'gray',} : {backgroundColor: '#A2B922',};
        return (
            <View>
                <Image source={require('../Images/login_image.jpg')} 
                    style={styles.imageTitle}
                />
                <TouchableOpacity onPress={this._popToPreview} style={styles.backButton}>
                    <Image source={require('../Images/back.png')}
                        style={styles.backImage}
                    />
                </TouchableOpacity>
                <View style={styles.tagView}>
                    <Image source={require('../Images/defaultIcon@2x.png')}
                        style={{height:80,width:80,}}
                    />
                    <Text style={styles.tagText}>源品优购</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput 
                        style={[styles.textInput,phoneStyle]}
                        onChangeText={(userName) => this._judgePhoneNumber(userName)}
                        value={this.state.userName}
                        placeholder={'请输入手机号'}
                        keyboardType={'numeric'}
                        clearButtonMode={'while-editing'}
                        //onEndEditing={this._judgePhoneNumber}
                        maxLength={11}
                    />
                    <TextInput 
                        style={[styles.textInput,{marginTop:15},passStyle]}
                        onChangeText={(password) => this._judgePassword(password)}
                        value={this.state.password}
                        placeholder={'请输入密码'}
                        clearButtonMode={'while-editing'}
                        secureTextEntry={true}
                        //onEndEditing={this._judgePassword}
                        //onSubmitEditing={this._startLogin}
                    />
                    <TouchableOpacity 
                        style={[styles.loginButton,logStyle]} 
                        onPress={this._startLogin}
                        disabled={loginButtonAble}
                    >
                        <Text style={styles.loginText}>登录</Text>
                    </TouchableOpacity>
                    <View style={styles.bottomView}>
                        <Text style={styles.registText}>快速注册</Text>
                        <View style={{flex: 1}}></View>
                        <Text style={styles.registText}>找回密码</Text>
                    </View>
                </View>
            </View>
        );
    }
};

var styles = StyleSheet.create ({
    imageTitle: {
        height: imageHeight,
        width: screenWidth
    },
    backButton: {
        marginTop: 39-imageHeight,
        marginLeft: 10,
    },
    backImage: {
        height: 20,
        width: 11,
    },
    tagView: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 43
    },
    tagText: {
        color: 'white',
        fontSize: 24,
        marginTop: 13
    },
    inputView: {
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 88
    },
    textInput: {
        height: 48, 
        width: 300*(screenWidth/375), 
        backgroundColor: '#FBFBFB',
        marginLeft: 75*(screenWidth/375)/2
    },
    loginButton: {
        width: 300*(screenWidth/375),
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 36,
        borderRadius: 19,
    },
    loginText: {
        color: 'white',
        fontSize: 18
    },
    bottomView: {
        marginTop: 17,
        width: 300*(screenWidth/375),
        flexDirection: 'row',
        height: 25
    },
    registText: {
        width: 70,
        fontSize: 14,
        textAlign: 'center'
    }
})

module.exports = Login;