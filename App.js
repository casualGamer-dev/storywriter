import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';


export default class App extends Component {
  render(){
  return (
    <View style={{flex: 1}}>
      <Appcontainer></Appcontainer>
    </View>
  );
}
}

const TabNavigator =createBottomTabNavigator({
  Write:{screen:WriteStoryScreen},
  Read:{screen:ReadStoryScreen}
})
const Appcontainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
