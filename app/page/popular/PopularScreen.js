import {Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

export default class PopularScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>PopularScreen</Text>
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