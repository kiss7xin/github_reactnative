import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PopularScreen from './PopularScreen';
import { View,Text,StyleSheet } from 'react-native';

const PopTab = createMaterialTopTabNavigator();

export default class PopularTabs extends Component {
  constructor(props) {
    super(props)
    this.tabNames=['Java','Android','iOS','React','React Native','Uniapp','Flutter']
  }
  render() {
    const tabNames = this.tabNames;
    return (
        <PopTab.Navigator 
        initialRouteName="Popular1"
        screenOptions={{ 
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: '#a67' },
        }}>
          {
          tabNames.map((item)=>{
            return <PopTab.Screen key={item} name={item} component={PopularScreen}/>
          })
        }
        </PopTab.Navigator>
    );
  }
}