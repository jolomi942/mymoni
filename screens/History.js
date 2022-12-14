import { useContext } from 'react';
import { AppContext } from '../globals/AppContext';
import { View, Text, FlatList, TouchableOpacity  } from 'react-native';
import { styles } from '../styles/history';
import { SafeArea } from '../utilities/AreaView';
import { Button } from 'react-native-paper';
import { Expensetrans } from '../components/host';

export function History({navigation}){
     const {email,setEmail,fullName} = useContext(AppContext)
    return(
        <SafeArea>
            <View style={styles.container}>
                <View style={styles.transHeadLine}>
                    <Text style={styles.transHis}>Transaction History</Text>
                </View>

                <View style={styles.transOptions}>
                    <Button style={styles.expense} mode='contained'onPress={() => navigation.navigate('History')}>Expenses</Button>
                    <Button style={styles.income} mode='contained'onPress={() => navigation.navigate('Incomehistory')}>Income</Button>
                </View>
                <View style={styles.historyBlock}>
                    <FlatList
                        data={Expensetrans}
                        renderItem={({item}) =>{
                            return(
                                <TouchableOpacity style={styles.transDetails}>
                                    <View style={styles.expenseInfo}>
                                        <Text style={styles.userGross}>{item.transPurpose}</Text>
                                        <Text style={styles.userAmount}>{item.transAmount}</Text>
                                        <Text style={styles.userDate}>{item.transDate}</Text>
                                        <Text style={styles.userStamp}>1 hour ago</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }

                        }
                    />
                </View>
                
            </View>
            {/* <View>
                <Text>{fullName}</Text>
                <TextInput placeholder='Enter your new email' 
                onChangeText={(text)=> setEmail(text)}/>

                <Button mode='contained'>{email}</Button>
            </View> */}
        </SafeArea>
    )
}