import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './android/app/src/screens/FirstScreen';
import RegisterScreen from './android/app/src/screens/RegisterScreen';
import LoginScreen from './android/app/src/screens/LogInScreen';



const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >
      
        <Stack.Screen name="EXPOLORE QR CABS" component={FirstScreen}
         options={{
          headerTitleAlign:'center',
         }}

        />
        <Stack.Screen name="Register" component={RegisterScreen} options={{
          headerTitleAlign:'center',
         }} />
        <Stack.Screen name="LogIn" component={LoginScreen} options={{
          headerTitleAlign:'center',
         }}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;



//firstscreen
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


//register

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const handleRegister = () => {
  
    navigation.navigate('Login');
  };

  return (
    
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'orange' }]}
        onPress={() => navigation.navigate('LogIn')}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
   
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


//login
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/cab.png')} style={styles.cabImage} />
      <Text style={styles.labelText}>Username</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <Text style={styles.labelText}>Password</Text>
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Go to Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Guest</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
    marginVertical: 10,
    
    
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
