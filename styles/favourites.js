import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:Theme.colors.brown500
  },
  head: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  brandText: {
    fontFamily: "Lobster_400Regular",
    fontSize: Theme.fonts.fontSizePoint.h4,
    color: Theme.colors.purple500,
    marginRight: 5,
  },
  tipBlock: {
    flex: 2,
    backgroundColor: Theme.colors.brown500,
    flexDirection: "row",
    borderRadius: 25,
    marginTop: 7,
    margin: 10,
    padding: 10,
  },
  tipBlock2: {
    flex: 2,
    //backgroundColor:'#FEB139',
    backgroundColor: Theme.colors.yellowAltGreen,
    flexDirection: "row",
    borderRadius: 25,
    margin: 10,
    padding: 10,
  },
  tipBlock3: {
    flex: 2,
    backgroundColor: Theme.colors.red500,
    flexDirection: "row",
    borderRadius: 25,
    margin: 10,
    padding: 10,
  },
  tipBlock4: {
    flex: 2,
    backgroundColor: Theme.colors.redAltYellow,
    flexDirection: "row",
    borderRadius: 25,
    margin: 10,
    padding: 10,
  },
  tipImage: {
    flex: 3,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  favs: {
    flex: 3,
  },
  remove: {
    alignItems: "flex-end",
  },
  tipbox: {
    flex: 2,
  },
  favTip: {
    fontFamily: "Philosopher_700Bold",
    color: Theme.colors.redAltYellow,
  },
  favTip2: {
    fontFamily: "Philosopher_700Bold",
    //color:Theme.colors.purple700,
    color: "#293462",
  },
  favTip3: {
    fontFamily: "Philosopher_700Bold",
    //color:Theme.colors.purple00
  },
  favTip4: {
    fontFamily: "Philosopher_700Bold",
    color: Theme.colors.purple700,
  },
  date: {
    //flex:2,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  tipDates: {
    fontFamily: "Philosopher_700Bold",
    color: Theme.colors.purple500,
    fontSize: 11,
  },
});
