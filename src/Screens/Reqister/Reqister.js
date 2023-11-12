import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';

const Reqister = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('../../aset/image/stan.jpg')}
        style={{height: 200, width: 360}}
      />
      <TextInput
        placeholder="MASUKKAN NAMA"
        style={{
          elevation: 2,
          backgroundColor: 'white',
          marginHorizontal: 30,
          borderRadius: 10,
          marginBottom: 3,
          marginTop: 70,
        }}
      />
      <TextInput
        placeholder="GENDER"
        style={{
          backgroundColor: 'white',
          elevation: 2,
          marginHorizontal: 30,
          borderRadius: 10,
          marginBottom: 3,
          marginTop: 20,
        }}
      />
      <TextInput
        placeholder="BUAT EMAIL"
        style={{
          backgroundColor: 'white',
          elevation: 2,
          marginHorizontal: 30,
          borderRadius: 10,
          marginBottom: 3,
          marginTop: 20,
        }}
      />
      <TextInput
        placeholder="BUAT PASSWORD"
        style={{
          backgroundColor: 'white',
          elevation: 2,
          marginHorizontal: 30,
          borderRadius: 10,
          marginBottom: 5,
          marginTop: 20,
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: 'white',
          marginTop: 30,
          width: 80,
          marginHorizontal: 140,
          height: 30,
          borderRadius: 10,
          elevation: 3,
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 4,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reqister;
