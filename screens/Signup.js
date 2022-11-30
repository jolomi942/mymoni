import { SafeArea } from '../utilities/AreaView';
import { View, Text, TextInput} from 'react-native';
import { Button } from 'react-native-paper';
import { SignUpstyle} from '../styles/SignUp'


export function Signup ({navigation}){
    return (
        <SafeArea style={SignUpstyle.container}>
            <View style={SignUpstyle.brand}>
                <Text style={SignUpstyle.brandName}>mymoni</Text>
                <Text>Create your account</Text>
            </View>

            <View style={SignUpstyle.input}>
                <View style={{marginVertical:10}}>
                    <Text>First Name</Text>
                    <TextInput placeholder='John' style={{borderColor:'black', border:5, width:20, height: 20}}></TextInput>
                </View>
                
                <View style={{marginVertical:10}}>
                    <Text>Last Name</Text>
                    <TextInput placeholder='Doe'></TextInput>
                </View>

                <View style={{marginVertical:10}}>
                <Text>Phone Number</Text>
                <TextInput placeholder='+234800000000'></TextInput>
                </View>
                
                <View style={{marginVertical:10}}>
                <Text>Email Address</Text>
                <TextInput placeholder='johndoe@gmail.com'></TextInput>
                </View>

                <View style={{marginVertical:10}}>
                <Text>Create your password</Text>
                <TextInput></TextInput>
                </View>

                <View style={{marginVertical:10}}>
                <Text>Confirm password</Text>
                <TextInput></TextInput>
                </View>
            </View>
            <Button mode='contained'>Sign Up</Button>
            <View>
                <Button mode='contained' onPress={() => navigation.navigate('About')} color='red'> Go to About</Button>
            </View>
                    
        </SafeArea>
    )
}
