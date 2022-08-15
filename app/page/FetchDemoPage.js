import { Text, StyleSheet, View, TextInput,ScrollView} from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-paper'

export default FetchDemoPage = () => {

  const [value, onChangeText] = React.useState('React');
  const [showText,setShowText] = React.useState('');

  loadData =() => {
    let url = 'https://api.github.com/search/repositories?q=' + value;
    fetch(url)
    .then(res => {
      if(res.ok) {
        return res.text();
      }
      throw new Error('Network response was not ok.');
    })
    .then(resText => {
      setShowText(resText);
    })
    .catch(e => {
      setShowText(e.toString());
    });
  }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Fetch使用</Text>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
          />
          <Button title="获取" onPress={loadData} >获取</Button>
        </View>
        <ScrollView>
          <Text>{showText}</Text>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    felx: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})