import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PopularScreen from './PopularScreen';
import { View,Text,StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import actions from '../../action/index';

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

const mapStateToProps = state => ({
  popular: state.popular
});

const mapDispatchToProps = state => ({
  onLoadPopulatData: (storeName, url) => dispatch(actions.onLoadPopularData(storeName, url))
});

const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTabs)

const styles = StyleSheet.create({

})
