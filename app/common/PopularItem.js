import { Image, TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class PopularItem extends Component {
  render() {
    const {item} = this.props;
    if (!item || !item.owner) return null;
    let favoriteButton = 
    <TouchableOpacity
    style={{padding: 6}}
    onPress={()=>{

    }}
    underlayColor={'transparent'}
    >
        <FontAwesome name={'star-o'} size={26} style={{color: 'red'}}></FontAwesome>
    </TouchableOpacity>
    return (
        <TouchableOpacity onPress={this.props.onSelect}>
            <View style={styles.cell_container}>
                <Text style={styles.title}>
                    {item.full_name}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
                <View style={styles.row}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>Author:</Text>
                        <Image style={{height: 22, width: 22}} 
                         source={{uri: item.owner.avatar_url}} />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>Start:</Text>
                        <Text>{item.stargazers_count}</Text>
                    </View>
                    {favoriteButton}
                </View>
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    cell_container: {
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 16,
        marginBottom: 2,
        color: '#212121',
    },
    description: {
        fontSize: 14,
        marginBottom: 2,
        color: '#757575',
    },
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})