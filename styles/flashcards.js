import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";
import { Pacifico_400Regular } from "@expo-google-fonts/philosopher";



export const styles = StyleSheet.create({
  container: {
    paddingHorizontal:Theme.sizes[2],
    paddingBottom:Theme.sizes[3],
    flex:1,
    backgroundColor:Theme.colors.greenAltYellow,
  },
  flashIcon:{
    marginBottom:Theme.sizes[3]
  },
  flashArticle:{
    fontSize:Theme.fonts.fontSizePoint.title,
    color:"white",
    fontFamily:Pacifico_400Regular
  },
  flashTitle:{
    fontFamily:Pacifico_400Regular
  }
});
