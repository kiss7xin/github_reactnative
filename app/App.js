import 'react-native-gesture-handler';
import React, { Component } from 'react'
import RootStackScreen from './navigator/RootStackScreen'
import {Provider} from 'react-redux'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStackScreen/>
      </Provider>
    )
  }
}