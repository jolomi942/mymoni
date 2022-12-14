import { useState, useEffect,useCallback } from 'react';
import { Entypo, Feather,FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart,faCirclePlus,faArrowRight, faMagnifyingGlass, faDisplay } from '@fortawesome/free-solid-svg-icons';
import { Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { SafeArea } from '../utilities/AreaView';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { styles } from '../styles/pay';
import { Theme } from "../themes/theme";
import { Button } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlashCards } from '../screens/FlashCards';
import { Favourites } from '../screens/Favourites';
import { History } from '../screens/History';
import { Ionicons } from '@expo/vector-icons';


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
        <View style={styles.container}>
          <Text style={styles.Pay}>Pay Bills</Text>
            <View style={styles.backgroundImage}>
              <Image style={styles.tipOfDayImg} source={require('../assets/istockphoto-pay-bills.png')}/> 
            </View>

          <View style={styles.input}>
          <TouchableOpacity>
                    <FontAwesomeIcon icon={faMagnifyingGlass} color={Theme.colors.brown500} size={Theme.fonts.fontSizePoint.caption}/>
                  </TouchableOpacity>
            <TextInput 
              placeholder='search'
              mode='outlined'
              outlineColor={Theme.colors.green700}
              style={{
                paddingVertical:Theme.sizes[3],
                marginHorizontal:Theme.sizes[2],
                marginTop:50,
                borderRadius:30,
                backgroundColor:Theme.colors.brown500,
                fontSize:Theme.fonts.fontSizePoint.title,
                marginBottom:Theme.sizes[2]
                
              }}
              
              
               
            />
            <Text style={styles.bill}>Billers Categories</Text>
  
            <View style={styles.maincontainer}>

            <TouchableOpacity>
                <View style={styles.box1}>
                  <Text style={styles.Tbox1}>Consultancy</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity>
                <View style={styles.box2}>
                <Text style={styles.Tbox2}>Entertainment</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.box3}>
                <Text style={styles.Tbox3}>Events</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.box4}>
                <Text style={styles.Tbox4}>Marketing</Text>
                </View>
              </TouchableOpacity>

            </View>
              
          </View>
          
          <TouchableOpacity>
            <Button style={styles.input}
              color={Theme.colors.brown300}
              margin={Theme.sizes[3]}
              mode='contained'
              contentStyle={{paddingVertical:Theme.sizes[3]}}
              onPress={() => navigation.navigate('Home')}> Back to Home
            </Button>
          </TouchableOpacity>
        </View>
     </SafeArea>

     
    
    )
  }

  