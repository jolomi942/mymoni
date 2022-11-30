import { StyleSheet } from "react-native";
import { Theme } from "../themes/Theme";




export const styles=StyleSheet.create({
   container:{
      flex:1,
      paddingHorizontal:8,
      fontFamily:'Lobster_400Regular',
      fontSize: 6,
      color:'black',
      backgroundColor:"white",
      
     
      
},
    firstName:{
        fontFamily:'Lobster_400Regular',
        fontSize:6,
        color:'black',
        borderRadius:50,
        margin:10,
        
    },
    surname:{
        fontFamily:'Lobster_400Regular',
        fontSize:6,
        color:'grey',
        borderRadius:50,
        backgroundColor:Theme.colors.purple700,
    },
    phoneNumber:{
        fontFamily:'Lobster_400Regular',
        fontSize:6,
        color:'black',
        borderRadius:50,
        backgroundColor:Theme.colors.purple700,

    },
    
    email:{
        fontFamily:'Lobster_400Regular',
        fontSize:6,
        color:'black',
        borderRadius:50,
        backgroundColor:Theme.colors.purple700,

    },
    passWord:{
        fontFamily:'Lobster_400Regular',
        fontSize:6,
        color:'black',
        borderRadius:50,
        backgroundColor:Theme.colors.purple700,
        
    },
    confirmPassWord:{
        fontFamily:'Lobster_400Regular',
        fontSize:6,
        color:'grey',
        borderRadius:50,
        backgroundColor:Theme.colors.purple700,
        
    },
})
