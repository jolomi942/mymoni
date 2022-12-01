import { View  } from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import { Button } from 'react-native-paper';

export function Quizes({navigation,route}){
    const {userName,email}= route.params;
    console.log(userName)
    return(
        <SafeArea>
            <View>
                <Button>{userName}</Button>
            </View>
        </SafeArea>
    )
}