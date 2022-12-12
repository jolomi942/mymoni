import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp} from './Signup';
import { SignIn} from './Signin';
import { About } from './About';
import { Home} from './HomeScreen';
import { AddExpense} from './AddExpense';
import { AddIncome} from './AddIncome';
import { Intro } from './Intro';
import { Quizes} from './Quizes';
import { History } from './History';
import { Incomehistory } from './Incomehistory';
import { Pay } from './Pay';



const Stack = createNativeStackNavigator()

export function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Pay" screenOptions={{headerShown:false}}>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:true}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:true}}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="AddIncome" component={AddIncome} options={{headerShown:true}}/>
            <Stack.Screen name="AddExpense" component={AddExpense} options={{headerShown:true}}/>
            <Stack.Screen name="Intro" component={Intro}/>
            <Stack.Screen name="Quizes" component={Quizes}/>
            <Stack.Screen name="History" component={History}/>
            <Stack.Screen name="Incomehistory" component={Incomehistory}/>
            <Stack.Screen name="Pay" component={Pay}/>
        </Stack.Navigator>
    )
}