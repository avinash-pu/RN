import React from 'react';
import { StyleSheet, View,SafeAreaView,ScrollView } from 'react-native';
import MapView from 'react-native-maps';



export default class MyApp extends React.Component {
  render() {
    return (
      <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
       
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 500,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});