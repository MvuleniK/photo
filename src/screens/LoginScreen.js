import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LoginForm from '../components/LoginForm';




const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={require('../asset/images/icon2.png')} style={{width:100,height:100}}  />
      </View>
      <LoginForm navigation={navigation} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 12,
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
})