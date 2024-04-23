import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FirstScreen from './android/app/src/screens/FirstScreen';
import RegisterScreen from './android/app/src/screens/RegisterScreen';
import LoginScreen from './android/app/src/screens/LogInScreen';
import Account from './android/app/src/TabNavigation/Account';
import Ride from './android/app/src/TabNavigation/Ride';
import QR from './android/app/src/TabNavigation/QR';



const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();



function HomeTabNavigator() {
  return (
    <Tab.Navigator 
    initialRouteName="Ride"
  activeColor="#14B23F"
  inactiveColor="#3e2465"
  
  barStyle={{ backgroundColor: '#B8C2D4' }}>
      <Tab.Screen 
      name="Ride"
       component={Ride} 
       options={{
        tabBarIcon: ({color}) =>{
          return <FontAwesome name= {"car"} size={30} color={color}/>
        }
       }}
       />
      <Tab.Screen name="QR" component={QR} 
      options={{
        tabBarIcon: ({color}) =>{
          return <FontAwesome name= {"qrcode"} size={30} color={color}/>
        }
       }}/>
      <Tab.Screen name="Account" component={Account}
      options={{
        tabBarIcon: ({color}) =>{
          return <MaterialIcons name= {"manage-accounts"} size={30} color={color}/>
        }
       }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EXPOLORE QR CABS">
        <Stack.Screen
          name="EXPOLORE QR CABS"
          component={FirstScreen}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="LogIn"
          component={LoginScreen}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="TabNav"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
