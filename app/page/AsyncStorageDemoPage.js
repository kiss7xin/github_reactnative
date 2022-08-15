import { Button,Text, StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const sKey = "storage_Key";

export default AsyncStorageDemoPage = () => {

  const [value, onChangeText] = React.useState('React');
  const [showText,SetShowText] = React.useState('');

   doSave = async ()=> {
    //用法1
    AsyncStorage.setItem(sKey, value, error => {
        error && console.log(error.toString());
    });

    // //用法2
    // AsyncStorage.setItem(sKey, value)
    // .catch(error => {
    //     error && console.log(error.toString());
    // });
    
    // //用法3
    // try {
    //     await AsyncStorage.setItem(sKey, value)
    // } catch (e) {
    //     error && console.log(error.toString());
    // }
  }

  doRemove = async ()=> {

    try {
        await AsyncStorage.removeItem(sKey)
      } catch(e) {
        // remove error
      }

      SetShowText(null);
    // AsyncStorage.removeItem(sKey, error => {
    //     error && console.log(error.toString());
    // });
  }

  getData = async ()=> {
    try {
        const value = await AsyncStorage.getItem(sKey)
        if(value !== null) {
            SetShowText(value);
        }
      } catch(e) {
        // error reading value
      }
  }
  
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>AsyncStorage 使用</Text>
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            <View style={styles.buttons}>
                <Button title="保存" onPress={doSave} >保存</Button>
                <Button title="获取" onPress={getData} >获取</Button>
                <Button title="删除" onPress={doRemove} >删除</Button>
            </View>
            <Text>{showText}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    felx: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputContainer: {
    felx: 1
  },
  input: {
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

})