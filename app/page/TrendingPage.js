import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../action'

class TrendingPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TrendingPage</Text>
        <Button 
        title={'修改主题'}
        onPress={()=>this.props.onThemeChange('blue')}
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

const mapDispatchToProps = dispatch=>({
  onThemeChange: theme=> dispatch(actions.onThemeChange(theme))
});
// 连接组件
export default connect(null,mapDispatchToProps)(TrendingPage);
 