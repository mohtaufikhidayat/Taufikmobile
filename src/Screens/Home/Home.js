import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, } from 'react-native';

const App = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'green', height: 100}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../aset/image/dowload.jpg')}
          style={{width: 60, height: 60, marginTop: 20, marginHorizontal: 10}}
        />
        <View>
          <Text
            style={{
              fontSize: 18,
              marginTop: 20,
              // bottom: 52,
              textAlign: 'left',
              fontWeight: 'bold',
              color: 'white',
              // marginLeft: 40,
            }}>
            PENDAFTRAN SANTRI BARU
          </Text>
          <Text
            style={{
              fontSize: 14,
              // marginHorizontal: 32,
              // bottom: 57,
              textAlign: 'left',
              fontWeight: 'bold',
              color: 'white',
              // marginLeft: 40,
            }}>
            PP DARUL ULUM II AL-WAHIDIYAH
          </Text>
          <Text
            style={{
              fontSize: 12,
              // marginHorizontal: 74,
              // bottom: 60,
              textAlign: 'left',
              fontWeight: 'bold',
              color: 'white',
              // marginLeft: 40,
            }}>
            GERSEMPAL-OMBEN-SAMPANG
          </Text>
        </View>
      </View>
      
        <Image source={require('../../aset/image/stan.jpg')}style={{width: 500, height: 400,marginTop: 20,}} />
    </View>
  );
};

export default App;
