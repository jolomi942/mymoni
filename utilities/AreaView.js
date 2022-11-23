import { SafeAreaView, Platform, StatusBar,StyleSheet } from "react-native";


export function SafeArea({children}){
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
            
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"grey"
    }
})