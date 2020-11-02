import React { Component } from 'react';
import { StyleSheet, Text,TextInput,Image, View ,TouchableOpacity,KeyboardAvoidingView,Alert} from 'react-native';
import firebase from 'firebase';
import db from  '../config'
export default class ReadStoryScreen extends Component{


    render(){
        return(
        <View style={{flex:5,alignItems:"center"}}>
        <Image source={require('../assets/write.png')} style={{width:1500,height:150}}></Image>
        <Text style={{textAlign:"center",fontSize:60}}>
         <TextInput >
           <Text> story title</Text>
         </TextInput>
         <TextInput>
           <Text> author</Text>
         </TextInput>
        </Text>
    </View>
    )
    }
}
