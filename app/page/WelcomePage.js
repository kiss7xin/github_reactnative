import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'


export default class WelcomePage extends Component {
    componentDidMount() {
        this.time = setTimeout(()=>{
            SplashScreen.hide();
            //跳转到首页
        },
        200);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
        <View>
            <Text>WelcomePage</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({})