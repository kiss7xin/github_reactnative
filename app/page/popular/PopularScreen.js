import {FlatList, Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import NavigationUtil from '../../navigator/NavigaionUtil';
import { Button } from 'react-native-paper';

export default class PopularScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>PopularScreen</Text>
        <Text 
        onPress={()=>{
          navigation.navigate('Tag')
          // NavigationUtil.goPage({},'Tag')
        }}>跳转到Tag页面</Text>
        <Button onPress={()=> {
          // NavigationUtil.goPage({navigation: this.props.navigation}, "FetchDemoPage");
          navigation.navigate('FetchDemoPage');
        }}>Fetch 使用</Button>

        <Button onPress={()=> {
          navigation.navigate('AsyncStorageDemoPage');
        }}>AsyncStorage 使用</Button>

        <Button onPress={()=> {
          navigation.navigate('DataStoreDemoPage');
        }}>DataStore 使用</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    alignContent: 'center',
    alignItems: 'center'
  },
})