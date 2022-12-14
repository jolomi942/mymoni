import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontDisplay } from "expo-font";
import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles=StyleSheet.create({
     container:{
       backgroundColor:Theme.colors.brown500,
       height:"100%",
       
       
       
       
       
     },
     backgroundImage:{
        height:4
     },

     Pay:{
      fontFamily:'Philosopher_700Bold',
      fontSize:Theme.fonts.fontSizePoint.h5,
      textAlign:'center',
      color:Theme.colors.brown700,
     },

     maincontainer:{
      flexWrap:'nowrap',
      marginTop:'70%',
      
     },

     bill:{
      fontSize:Theme.fonts.fontSizePoint.h5,
      fontFamily:'Philosopher_700Bold',
      color:Theme.colors.brown700,
      textAlign:"center"

      
      
     },
     box1:{
      borderRadius:30,
      margin:Theme.sizes[1],
      marginStart:100,
      backgroundColor:Theme.colors.brown700,
      width:"100%",
      height:50,
      
            
     },
     
     box2:{
      borderRadius:30,
      margin:Theme.sizes[1],
      marginHorizontal:5,
      backgroundColor:Theme.colors.brown700,
      width:"100%",
      height:50,
     },
     box3:{
      borderRadius:30,
      margin:Theme.sizes[1],
      marginStart:100,
      backgroundColor:Theme.colors.brown700,
      width:"100%",
      height:50,
      
      
     },
     box4:{
      borderRadius:30,
      margin:Theme.sizes[1],
      marginHorizontal:5,
      backgroundColor:Theme.colors.brown700,
      width:"100%",
      height:50,
     },
     Tbox1:{
      textAlign:'center',
      textAlignVertical:"center",
      fontSize:Theme.fonts.fontSizePoint.h5,
      fontFamily:'Philosopher_700Bold',
      color:Theme.colors.brown500,
      
     },
     Tbox2:{
      textAlign:'center',
      textAlignVertical:"center",
      fontSize:Theme.fonts.fontSizePoint.h5,
      fontFamily:'Philosopher_700Bold',
      color:Theme.colors.brown500,
     },
     Tbox3:{
      textAlign:'center',
      textAlignVertical:"center",
      fontSize:Theme.fonts.fontSizePoint.h5,
      fontFamily:'Philosopher_700Bold',
      color:Theme.colors.brown500,
     },
     Tbox4:{
      textAlign:'center',
      textAlignVertical:"center",
      fontSize:Theme.fonts.fontSizePoint.h5,
      fontFamily:'Philosopher_700Bold',
      color:Theme.colors.brown500,

     },

     transact:{
      flex:1,
      flexDirection:'row',
      marginBottom:Theme.sizes[2]
  },
  payment:{
    borderRadius:30,
    margin:Theme.sizes[1],
    marginStart:100,
    backgroundColor:Theme.colors.brown700,
    width:"100%",
    height:50,
  },

  paymentText:{
    textAlign:'center',
      textAlignVertical:"center",
      fontSize:Theme.fonts.fontSizePoint.h5,
      fontFamily:'Philosopher_700Bold',
      color:Theme.colors.brown500,
},
     })