import { Button,Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class MyPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>MyPage</Text>
        <Button 
        title={'跳转Tag'}
        onPress={()=>navigation.navigate('Tag')}
        />
        <Button title={'fetch'} onPress={()=> {
          navigation.navigate('FetchDemoPage');
        }}>Fetch 使用</Button>

        <Button title={'storage'} onPress={()=> {
          navigation.navigate('AsyncStorageDemoPage');
        }}>AsyncStorage 使用</Button>

        <Button title={'datastore'} onPress={()=> {
          navigation.navigate('DataStoreDemoPage');
        }}>DataStore 使用</Button>
      </View>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})