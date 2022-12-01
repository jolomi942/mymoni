import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles=StyleSheet.create({
   container:{
      flex:1,
      paddingHorizontal:1,
      alignItems:"center",
      backgroundColor:'#3B185F',
    
   },
   brand:{
    alignItems:'center',
    marginVertical: 10,
   },
   brandName:{
    fontSize:40,
   },
   data:{
    alignItems:'center',
   },
   input:{
    color: 'purple',
    borderWidth:2,
    width:320,
    height:40,
    borderRadius:20,
    textAlign:'center',
    borderColor:'orange'
   },
   button:{
    marginTop:10,
    backgroundColor: 'orange',
    width:50,
   },
   button2:{
    marginTop:10,
    backgroundColor:'orange'
   },
   firstname:{
    marginVertical:10
   },
   
})