import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import TabScreen from './TabScreen';
import TagPage from '../page/my/TagPage';
import FetchDemoPage from '../page/FetchDemoPage';
import AsyncStorageDemoPage from '../page/AsyncStorageDemoPage';
import DataStoreDemoPage from '../page/DataStoreDemoPage';

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
    const {colors} = useTheme();
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Tab">
                <RootStack.Group screenOptions={{headerShown: false}}>
                    <RootStack.Screen name="Tab" component={TabScreen} />
                </RootStack.Group>

                <RootStack.Screen name="Tag" component={TagPage} />
                <RootStack.Screen name="FetchDemoPage" component={FetchDemoPage} />
                <RootStack.Screen name="AsyncStorageDemoPage" component={AsyncStorageDemoPage} />
                <RootStack.Screen name="DataStoreDemoPage" component={DataStoreDemoPage} />

            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootStackScreen;