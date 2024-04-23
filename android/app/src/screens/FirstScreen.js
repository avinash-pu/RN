import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

function FirstScreen({ navigation }) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>QR CABS</Text>
      <Image source={require('../assets/images/cab.png')} style={styles.cabImage} />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9E6D8',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  cabImage: {
    width: 400, 
    height: 300, 
    marginBottom: 50, 
    marginTop: 50,
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 30,
    
  },
  button: {
    backgroundColor: '#0C6037',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
});

export default FirstScreen;
