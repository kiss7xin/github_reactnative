import { Button,Text, StyleSheet, View, TextInput } from 'react-native'
import React,{useState} from 'react'
import DataStore from '../expend/dao/DataStore'

export default DataStoreDemoPage = () => {

  const dataStore = new DataStore();
  const [value, onChangeText] = React.useState('React');
  const [showText,setShowText] = React.useState('');

  loadData =() => { 
    let url = 'https://api.github.com/search/repositories?q=' + value;
    dataStore.fetchData(url)
    .then(data => {
      let showData = `初次数据加载时间: ${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
      setShowText(showData);
    }).catch((error) => {
      error && console.log(error.toString());
    })
  }

  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>离线缓存框架设计</Text>
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            <Button title="获取" onPress={this.loadData}>获取</Button>
            <Text>{showText}</Text>
        </View>
    </View>
    );
}

// export default class DataStoreDemoPage extends React.Component {

// constructor(props) {
//   super(props)
//   this.dataStore = new DataStore();
//   this.state = {
//     onChangeText: "React",
//     showText: ""
//   };
// }

//   loadData =() => { 
//     let url = 'https://api.github.com/search/repositories?q=' + this.state.onChangeText;
//     this.dataStore.fetch(url)
//     .then(data => {
//       let showData = `初次数据加载时间: ${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
//       this.setState({showText: showData});
//     }).catch((error) => {
//       error && console.log(error.toString());
//     })
//   }

//   render() {
//   return (
//     <View style={styles.container}>
//         <Text style={styles.welcome}>离线缓存框架设计</Text>
//         <View style={styles.inputContainer}>
//             <TextInput 
//             style={styles.input}
//             onChangeText={text => this.setState({onChangeText: text})}
//             value={this.state.onChangeText}
//             />
//             <Button title="获取" onPress={this.loadData}>获取</Button>
//             <Text>{this.state.showText}</Text>
//         </View>
//     </View>
//     );
//   }
// }

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

})