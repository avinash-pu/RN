import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,ScrollView,SafeAreaView } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  
  return (
<SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
        <Image source={require('../assets/images/cab.png')} style={styles.cabImage} />
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Username</Text>
        <TextInput placeholder="Username" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Mobile.No</Text>
        <TextInput placeholder="Mobile.No" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>User Email</Text>
        <TextInput placeholder="User Email" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Password</Text>
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Confirm Password</Text>
        <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() =>''}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'orange' }]}
        onPress={() => navigation.navigate('LogIn')}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#C9E6D8',
  },
  inputContainer: {
    width: '90%',
    marginVertical: 10,
  },
  labelText: {
    textAlign: 'left', 
    fontSize: 25,
    marginBottom: 5,
    fontWeight:'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    padding: 15,

  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cabImage: {
    width: 200, 
    height: 80, 
  } 
});

export default RegisterScreen;
