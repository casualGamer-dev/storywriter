import React, { Component } from 'react';
import { StyleSheet, Text,TouchableOpacity, View,Image } from 'react-native';

export default class WriteStoryScreen extends Component{
    constructor(){
        super();
        this.setState={
            title:"",
            story:"",
            buttonState:'normal',
            bookWritten:false,
            story:""
        }
    }
    handlestoryState =async(data) =>{
        const {buttonState}=this.state
        if(buttonState==="pressed"){
         this.setState({
             bookWritten:true,
             story:"data"
         })
        }
    }
    handleStoryTitle = async(data)=>{
        const buttonState= this.state
        if (buttonState==="pressed"){
        this.setState({
            title:"data"
        })
        }
    }
    
    render(){
        return(
        <View style={{flex:5,alignItems:"center"}}>
        <Image source={require('../assets/write.png')} style={{width:400,height:400}}></Image>
          
         </View>
    )
    }
}