
import React from 'react';
import {View,Text,} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';



function QR() {
  return (
    <QRCodeScanner
    onRead={({data}) =>alert (data)}
        reactivate={true}
        reactivateTimeout={500}
        showMarker={true}
        topContent={
          <View>
            <Text>scanner</Text>
          </View>
        }
    />
  );
}

export default QR;
