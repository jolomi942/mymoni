import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const SignUpstyle=StyleSheet.create({
   container:{
      flex:1,
      paddingHorizontal:1,
   
   },
   brand:{
      alignItems: 'center',
      justifyContent: 'center'
   },
   
   input:{
      marginVertical: 2,
      alignItems: 'center',
      fontFamily: ''

   },
   brandName:{
      fontFamily:'Lobster_400Regular',
      fontSize:Theme.fonts.fontSizePoint.h2,
      color:Theme.colors.purple500,
      textAlign: 'center'
   }})