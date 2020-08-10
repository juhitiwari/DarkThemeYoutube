import React, { Component } from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';
import {Entypo, Ionicons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons'
import Constants from 'expo-constants'
import { useNavigation ,useTheme} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
export default function Header(){

    const navigation = useNavigation()
const {colors}=useTheme()
const dispatch=useDispatch()
    const currentTheme=useSelector(state=>{
        return state.myDarkMode
    })


 
    return (
      <View style={[styles.header,{backgroundColor:colors.headerColor}]}>
        <View style={{flexDirection:'row',margin:5}}>
            <Entypo
            name="youtube"
            size={32}
            color="red"
            style={{marginLeft:20}}/>
            <Text style={[styles.headerText,{color:colors.iconColor}]}>YouTube</Text>
        </View>
        <View style={styles.headerIcons}>
            <MaterialIcons
            name="cast-connected"
            size={24}
            color={colors.iconColor}
            />
            <Ionicons
            name="md-videocam"
            size={24}
            color={colors.iconColor}/>
            <Ionicons
            name="md-search"
            size={24}
            color={colors.iconColor}
            onPress={()=>navigation.navigate('search')}/>
            <MaterialCommunityIcons
            name="theme-light-dark"
            size={24}
            color={colors.iconColor}
            onPress={()=>dispatch({type:'toggle_theme',payload:!currentTheme})}/>

        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
    header:{
        height:45,
        
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        marginTop:Constants.statusBarHeight
        
    },
    headerText:{
        fontSize:22,
        marginLeft:5,
        fontWeight:"bold",
       
    },
    headerIcons:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:150,
        margin:5

    }
 
});
