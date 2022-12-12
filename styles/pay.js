import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles=StyleSheet.create({
     maincontainer:{
       backgroundColor:Theme.colors.purple500,
       height:"100%",
       width: "100%",
       flexDirection:"row",
       justifyContent:"space-evenly",
       flexWrap:"wrap",
       fontWeight: "bold",
       fontSize: Theme.fonts.fontSizePoint.h3,
     },
     pay:{
     textAlign:'center',
     fontFamily: 'Lobster_400Regular',

     },
     menuBox1:{
       backgroundColor:Theme.colors.orange500,
         width: 180,
         height: 80,
         alignItems:"center",
         justifyContent: "center",
          borderRadius: 4,
          marginTop:200
          
     },
     
     text1:{
       fontSize:20
     },

     menuBox2:{
       backgroundColor:Theme.colors.brown900,
         width: 180,
         height: 80,
         alignItems:"center",
         justifyContent: "center",
         marginTop: 200,
        borderRadius: 4
         
     },
     
     text2:{
       fontSize:20
     },

     search:{
     backgroundColor:Theme.colors.orange300,
     borderRadius:50,
     width: "80%",
     height: 50,
     marginHorizontal:180,
     alignItems:'center',
     
},
     
     menuBox3:{
       backgroundColor:Theme.colors.orange300,
         width: 130,
         height: 80,
         alignItems:"center",
         justifyContent: "center",
         marginTop: 80,
          borderRadius: 4
          
     },
     
     text3:{
       fontSize:20
     },
     menuBox4:{
       backgroundColor:Theme.colors.brown300,
         width: 130,
         height: 80,
         alignItems:"center",
         justifyContent: "center",
         marginTop: 80,
        borderRadius: 4
         
     },
     
     text4:{
       fontSize:20
     }
     })