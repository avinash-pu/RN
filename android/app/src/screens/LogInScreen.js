import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,ScrollView,SafeAreaView } from 'react-native';

const LoginScreen = ({ navigation }) => {

  return (
    <SafeAreaView>
   <ScrollView>
    <View style={styles.container}>
      <Image source={require('../assets/images/cab.png')} style={styles.cabImage} />
      <Text style={styles.labelText}>Username</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <Text style={styles.labelText}>Password</Text>
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={() =>''}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Go to Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('TabNav')} >
        <Text style={styles.buttonText}>Guest</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex  ',
    alignItems: 'center',
    backgroundColor: '#C9E6D8',
    
  },
  labelText: {
    textAlign: 'left',
    fontSize: 28, 
    marginBottom: 15,
    marginTop:40,
    width: '90%', 
    fontWeight:'bold'
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    width: '90%',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginVertical: 20,
    
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cabImage: {
    width: 400, 
    height: 200, 
  } 
});

export default LoginScreen;
