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