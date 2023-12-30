import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';

const Reqister = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('../../aset/image/stan.jpg')}
        style={{height: 200, width: 500}}
      />
      <TextInput
        placeholder="MASUKKAN NAMA"
        style={{
          elevation: 2,
          backgroundColor: 'green',
          marginHorizontal: 30,
          borderRadius: 10,
          marginBottom: 3,
          marginTop: 70, textAlign: 'center'
        }}
      />
      <TextInput
        placeholder="GENDER"
        style={{
          backgroundColor: 'green',
          elevation: 2,
          marginHorizontal: 30,
          borderRadius: 10,
          marginBottom: 3,
          marginTop: 20, textAlign: 'center'
        }}
      />
      <TextInput
        placeholder="BUAT EMAIL"
        style={{
          backgroundColor: 'green',
          elevation: 2,
          marginHorizontal: 30,
          borderRadius: 10,
          marginBottom: 3,
          marginTop: 20, textAlign: 'center'
        }}
      />
      <TextInput
        placeholder="BUAT PASSWORD"
        style={{
          backgroundColor: 'green',
          elevation: 2,
          marginHorizontal: 30,
          borderRadius: 10,
          marginBottom: 5,
          marginTop: 20, textAlign: 'center'
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: 'white',
          marginTop: 30,
          width: 80,
          marginHorizontal: 175,
          height: 30,
          borderRadius: 10,
          elevation: 3,
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 4,
            fontSize: 15,
            fontWeight: 'bold', color: 'black', marginHorizontal: 2
          }}>
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reqister;
