import { Button, Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TagPage from '../page/my/TagPage';
import PopularTabs from './popular/PopularTabs'

const PopularStack = createNativeStackNavigator();

export default class PopularPage extends Component {
  render() {
    return (
      <PopularStack.Navigator initialRouteName='PopularTabs'>
        <PopularStack.Screen key="PopularTabs" name="PopularTabs" component={PopularTabs} />
        <PopularStack.Screen key="Tag" name="Tag" component={TagPage} />
      </PopularStack.Navigator>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
})