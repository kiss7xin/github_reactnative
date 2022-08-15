import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class FavoritePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>FavoritePage</Text>
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