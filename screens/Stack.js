import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { SignUp } from "./Signup";
import { SignIn } from "./Signin";
import { About } from "./About";
import { HomeScreen } from "./HomeScreen";
import { AddExpense } from "./AddExpense";
import { AddIncome } from "./AddIncome";

const Stack = createNativeStackNavigator();

export function StackNavigator (){
    return (
        <Stack.Navigator initialRouteName= 'SignIn' screenOptions={{headerShown:true}}>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:true}}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:true}}/> 
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="AddExpense" component={AddExpense}/>
            <Stack.Screen name="AddIncome" component={AddIncome}/>
        </Stack.Navigator>
    )
}