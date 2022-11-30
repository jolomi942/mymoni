import {View} from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import { Button } from 'react-native-paper';
import { faHandsAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';

export function SignIn ({navigation}){
    return(
        <SafeArea>
            <View>
                <Button mode='contained' onPress={() => navigation.navigate('SignUp')}> Go to Sign up</Button>
            </View>
        </SafeArea>
    )
}