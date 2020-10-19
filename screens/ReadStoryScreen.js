import React, { Component } from 'react';
import { StyleSheet, Text,TouchableOpacity, View ,Image} from 'react-native';
import React, { Component } from 'react';
import { StyleSheet, Text,TextInput,Image, View ,TouchableOpacity,KeyboardAvoidingView,Alert} from 'react-native';
import * as Permissions from "expo-permissions";
import BarCodeScanner from 'expo-barcode-scanner';
import firebase from 'firebase';
import db from  '../config'
export default class ReadStoryScreen extends Component{


    render(){
        return(
        <View style={{flex:5,alignItems:"center"}}>
        <Image source={require('../assets/read.png')} style={{width:1500,height:150}}></Image>
        <Text style={{textAlign:"center",fontSize:60}}>
         Read a story
        </Text>
    </View>
    )
    }
}