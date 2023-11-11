import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const Reqister = () => {
  return (
    <View>
      <Image
        source={require('../aset/image/stan.jpg')}
        style={{height: 200, width: 360}}
      />
      <Text
        style={{s
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 15,
          marginTop: 50,
          color: 'black',
        }}>
        Buatlah akun terlebih dahulu untuk terhubung ke apk psb,klik mulai di
        bawah ini dan ikuti langkah langkahnya
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          height: 30,
          width: 100,
          marginTop: 20,
          marginHorizontal: 130,
          borderRadius: 5,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            marginVertical: 2,
            marginTop: 4,
            color: 'white',
          }}>
          Mulai
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reqister;
