import { SafeArea } from '../utilities/AreaView';
import { View, Text, TextInput} from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../styles/signup';

export function SignUp (){
    return (
        <SafeArea>
            <View style={styles.container}>

            <View style={styles.brand}>
                <Text style={styles.brandName}>mymoni</Text>
                <Text>Create your account</Text>
            </View>
            
            <View style={styles.data}>
                <View style={styles.firstname}>
                    <Text>First Name</Text>
                    <TextInput style={styles.input} placeholder='firstname'/>
                </View>
                <View>
                    <Text>Last Name</Text>
                    <TextInput style={styles.input} placeholder='lastname'/>
                </View>
                <View>
                    <Text>Phone Number</Text>
                    <TextInput style={styles.input} placeholder='phone number'/>
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput style={styles.input} placeholder='email'/>
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput style={styles.input} placeholder='password'/>
                </View>
                <View>
                    <Text>Confirm Password</Text>
                    <TextInput style={styles.input} placeholder='confirm password'/>
                </View>

                <Button mode='contained' style={styles.button}>Sign Up</Button>
                <Button mode='contained'style={styles.button2}>Back to Home</Button>
            </View>
            </View>
        </SafeArea>
    )
}
