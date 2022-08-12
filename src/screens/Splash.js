import React from 'react';
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native';



const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('Home')
    },3000)
    return (
        <View style={styles.container} >
            <StatusBar style={styles.status} /> 
            <Image source={require('../assest/images/icon2.png')} style={{width:50,height:50}}  />    
            <Text style={styles.title} >Memory</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        backgroundColor: "#000000"
    },
    status: {
        barStyle: "light-content",
         hidden: false,
         backgroundColor: '#fff',
    },
    title:{
        fontFamily:'OpenSans-Bold',
        fontSize:30,
        color:"#fff" 
    }




})