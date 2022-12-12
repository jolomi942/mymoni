import { useState, useEffect,useCallback } from 'react';
import { Entypo, Feather,FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart,faCirclePlus,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import * as Font from 'expo-font';
import { SafeArea } from '../utilities/AreaView';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../styles/pay';
import { Theme } from "../themes/theme";


export function Pay({navigation}){
    const [appIsReady, setAppIsReady] = useState(false);

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
        <View style = {styles.container}>
          <Text style={styles.pay}>Pay Bills</Text>
            <View style={styles.maincontainer}>
              <TextInput placeholder='search'>
            <View style={styles.search}>
              
              <FontAwesomeIcon size={Theme.fonts.fontSizePoint.h6} icon={faArrowRight} color={Theme.colors.brown700}/>
          
            </View>
              </TextInput>
              <TouchableOpacity>
                <View style={styles.menuBox1}>
                  <Text style={styles.text1}>Consultancy </Text>
                </View>
              </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.menuBox2}>
                      <Text style={styles.text2}>Entertainment </Text>
                    </View>
                  </TouchableOpacity>
                    </View>

                  <View>
                  <TouchableOpacity>
                  <View style={styles.menuBox3}>
                    <Text style={styles.text3}>Entertainment </Text>
                  </View>
                    </TouchableOpacity>
                  </View>

              
        </View>
     </SafeArea>
    )
  }
