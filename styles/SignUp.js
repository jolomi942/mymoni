import { StyleSheet } from "react-native";
import { Theme } from "../themes/Theme";

export const SignUpstyle=StyleSheet.create({
   container:{
      flex:1,
      paddingHorizontal:8,
   
   },
   brand:{
      alignItems: 'center',
      justifyContent: 'center'
   },
   
   input:{
      marginVertical: 20,
      alignItems: 'center',
      fontFamily: ''

   },
   brandName:{
      fontFamily:'Lobster_400Regular',
      fontSize:Theme.fonts.fontSizePoint.h3,
      color:Theme.colors.purple500,
      textAlign: 'center'
   }})