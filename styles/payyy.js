import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontDisplay } from "expo-font";
import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles=StyleSheet.create({
     container:{
       backgroundColor:Theme.colors.orange300,
       height:"100%"
       
     },
     Pay:{
      fontFamily:'Philosopher_700Bold',
      fontSize:Theme.fonts.fontSizePoint.h5,
      textAlign:'center'
     },

     maincontainer:{
      flexWrap:'nowrap'
     },

     bill:{
      fontSize:Theme.fonts.fontSizePoint.h5,
      fontFamily:'Lobster_400Regular',

      
      
     },
     box1:{
      borderRadius:30,
      margin:2,
      marginHorizontal:5,
      backgroundColor:Theme.colors.orange500,
      borderColor:Theme.colors.redAltYellow,
      borderWidth:5,
      
      width:"100%",
      height:90,
            
     },
     
     box2:{
      borderRadius:30,
      margin:7,
      marginStart:100,
      backgroundColor:Theme.colors.orange500,
      borderColor:Theme.colors.redAltYellow,
      borderWidth:5,
      width:"100%",
      height:70,
     },
     box3:{
      borderRadius:30,
      margin:2,
      marginHorizontal:5,
      backgroundColor:Theme.colors.orange500,
      borderColor:Theme.colors.redAltYellow,
      borderWidth:5,
      width:"100%",
      height:90,
      
      
     },
     box4:{
      borderRadius:30,
      margin:2,
      marginStart:100,
      backgroundColor:Theme.colors.orange500,
      borderColor:Theme.colors.redAltYellow,
      borderWidth:5,
      width:"100%",
      height:90,
     },
     Tbox1:{
      textAlign:'center',
      textAlignVertical:"center",
      fontSize:Theme.fonts.fontSizePoint.h5,
      fontFamily:'Lobster_400Regular',
      
     },
     Tbox2:{
      textAlign:'center',
      textAlignVertical:"center",
      fontSize:Theme.fonts.fontSizePoint.h5,
      fontFamily:'Lobster_400Regular',
     },
     Tbox3:{
      textAlign:'center',
      textAlignVertical:"center",
      fontSize:Theme.fonts.fontSizePoint.h5,
      fontFamily:'Lobster_400Regular',
     },
     Tbox4:{
      textAlign:'center',
      textAlignVertical:"center",
      fontSize:Theme.fonts.fontSizePoint.h5,
      fontFamily:'Lobster_400Regular',
     },
     })