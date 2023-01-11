import { useState, useEffect, useCallback, useContext } from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from "../styles/profile";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { SafeArea } from '../utilities/AreaView';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart,faCirclePlus,faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../themes/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { AppContext } from '../globals/AppContext';
import { signOut } from 'firebase/auth';
import { authentication } from '../Firebase/firebase';


export function Profile({navigation}){
    const [appIsReady, setAppIsReady] = useState(false);
    const {setuid}= useContext(AppContext);

    

    useEffect(() => {
    async function prepare() {
      try {
          await Font.loadAsync({Lobster_400Regular,Philosopher_700Bold});
          await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
     
      await SplashScreen.hideAsync();
    }
  },  [appIsReady]);

  if (!appIsReady) {
    return null;

  }
  return (
    <SafeArea>
      <View style={styles.container}>
        <View style={styles.icons}>
          <TouchableOpacity
            style={styles.arrowLeft}
            onPress={() => navigation.navigate("Add Income")}
          >
            <FontAwesomeIcon
              size={Theme.fonts.fontSizePoint.h4}
              icon={faArrowLeft}
            />
            <TouchableOpacity
              style={styles.arrowRight}
              onPress={() => navigation.navigate("Add Income")}
            ></TouchableOpacity>
            <FontAwesomeIcon
              size={Theme.fonts.fontSizePoint.h4}
              icon={faArrowRight}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.imageContent}>
            <View style={styles.image}>
              <Image
                style={{ height: 150, width: 150, borderRadius: 80 }}
                source={require("../assets/profile-pix.jpg")}
              />
            </View>
            <Text style={styles.imageText}>Joined 6 month ago</Text>
          </View>

          <Text style={styles.firstName}> Esther Adeyinka </Text>

          <View style={styles.list}>
            <TouchableOpacity
              style={styles.list1}
              onPress={() => navigation.navigate("Add Income")}
            >
              <FontAwesomeIcon
                size={Theme.fonts.fontSizePoint.h4}
                icon={faCirclePlus}
                color={Theme.colors.green700}
              />
              <Text style={styles.badge}>Badge</Text>
              <FontAwesomeIcon
                size={Theme.fonts.fontSizePoint.h4}
                icon={faCirclePlus}
                color={Theme.colors.red500}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list2}
              onPress={() => navigation.navigate("Home")}
            >
              <FontAwesomeIcon
                size={Theme.fonts.fontSizePoint.h4}
                icon={faCirclePlus}
                color={Theme.colors.purple500}
              />
              <Text style={styles.session}>Session</Text>
              <FontAwesomeIcon
                size={Theme.fonts.fontSizePoint.h4}
                icon={faCirclePlus}
                color={Theme.colors.red500}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list3}
              onPress={() => navigation.navigate("Home")}
            >
              <FontAwesomeIcon
                size={Theme.fonts.fontSizePoint.h4}
                icon={faCirclePlus}
                color={Theme.colors.red500}
              />
              <Text style={styles.settings}>Settings</Text>
              <FontAwesomeIcon
                size={Theme.fonts.fontSizePoint.h4}
                icon={faCirclePlus}
                color={Theme.colors.red500}
              />
            </TouchableOpacity>
          </View>

          <Button
            mode="contained"
            contentStyle={{ paddingVertical: Theme.sizes[2] }}
            onPress={() => {
              signOut(authentication);
              setUid(null);
              navigation.navigate("Sign In");
            }}
          >
            SIGN OUT
          </Button>
        </View>
      </View>
    </SafeArea>
  );
  }