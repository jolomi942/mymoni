import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  arrowRight: {
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row",
  },
  arrowLeft: {
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row",
  },
  image: {
    borderColor: "red",
    alignItems: "center",
    borderWidth: 10,
    borderLeftWidth: 0,
    padding: 1,
    marginRight: 20,
    paddingLeft: 10,
    borderRadius: 500,
    borderColor: "red",
    height: 170,
    width: 170,
  },
  imageContent: {
    marginTop: 50,
    alignItems: "center",
    flexDirection: "row",
  },
  mainContainer: {
    fontSize: Theme.fonts.fontSizePoint.h5,
    fontFamily: "Philosopher_700Bold",
    padding: 20,
  },
  imageText: {
    fontSize: Theme.fonts.fontSizePoint.h5,
    fontFamily: "Philosopher_700Bold",
  },
  firstName: {
    fontSize: Theme.fonts.fontSizePoint.h2,
    fontFamily: "Philosopher_700Bold",
    margin: 40,
  },

  surname: {
    fontSize: Theme.fonts.fontSizePoint.h3,
    fontFamily: "Philosopher_700Bold",
    color: Theme.colors.brown300,
  },

  list: {
    marginBottom: 70,
    flexDirection: "column",
    justifyContent: "space-around",
  },

  badge: {
    fontSize: Theme.fonts.fontSizePoint.h5,
    fontFamily: "Philosopher_700Bold",
    justifyContent: "space-between",
    marginRight: 80,
    marginLeft: 40,
  },
  session: {
    fontSize: Theme.fonts.fontSizePoint.h5,
    fontFamily: "Philosopher_700Bold",
    marginRight: 80,
    marginLeft: 40,
  },
  settings: {
    fontSize: Theme.fonts.fontSizePoint.h5,
    fontFamily: "Philosopher_700Bold",
    marginRight: 80,
    marginLeft: 40,
  },
  list1: {
    flexDirection: "row",
    marginTop: 20,
  },
  list2: {
    flexDirection: "row",
    marginTop: 34,
  },
  list3: {
    flexDirection: "row",
    marginTop: 34,
  },
});