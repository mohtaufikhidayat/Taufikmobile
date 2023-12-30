import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('../../aset/image/iconpp.png')}
        style={{
          height: 210,
          width: 220,
          marginHorizontal: 110,
          marginVertical: 80,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          bottom: 60,
          fontSize: 23,
          fontWeight: 'bold', color: 'black', marginHorizontal: 80
        }}>
        Pendaftaran Santri Baru
      </Text>
      <Text
        style={{
          textAlign: 'center',
          bottom: 60,
          fontSize: 19,
          fontWeight: 'bold', color: 'black', marginHorizontal: 80
        }}>
        Pp Darul Ulum II Al Wahidiyah
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 15,
          fontWeight: 'bold', color: 'black', height: 20, marginLeft: 24
        }}>
        Silahkan Masuk
      </Text>
      <TextInput
        style={{
          borderBottomRightRadius: 5,
          width: 200,
          height: 40,
          backgroundColor: 'white',
          marginHorizontal: 120,
          marginVertical: 10,
          borderRadius: 5,
          borderBottomWidth: 1,
          elevation: 10,
        }}></TextInput>
      <TextInput
        style={{
          width: 200,
          height: 35,
          backgroundColor: 'white',
          marginHorizontal: 120,
          marginVertical: 10,
          borderRadius: 5,
          borderBottomWidth: 1,
          elevation: 10,
        }}></TextInput>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: 'green',
          paddingVertical: 5,
          width: 120,
          height: 30,
          marginHorizontal: 163,
          marginVertical: 1,
          borderRadius: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            alignItems: 'center',
            margintop: 2,
            height: 30,
            color: 'white',
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Reqister')}>
        <Text
          style={{
            textAlign: 'center',
            width: 120,
            marginHorizontal: 163,
            marginTop: 20,
            fontSize: 15, color: 'black', fontWeight: 'bold'
          }}>
          Buat Akun Baru
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
