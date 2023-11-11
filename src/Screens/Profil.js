import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';

const App = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('../aset/image/dowload.jpg')}
        style={{
          height: 140,
          width: 140,
          marginHorizontal: 110,
          marginVertical: 80,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          bottom: 60,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Pendaftaran Santri Baru
      </Text>
      <Text
        style={{
          textAlign: 'center',
          bottom: 60,
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        Pp Darul Ulum II Al Wahidiyah
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Silahkan Masuk
      </Text>
      <TextInput
        style={{
          borderBottomRightRadius: 5,
          width: 200,
          height: 40,
          backgroundColor: 'white',
          marginHorizontal: 80,
          marginVertical: 10,
          borderRadius: 5,
          borderBottomWidth: 1,
        }}></TextInput>
      <TextInput
        style={{
          borderBottomRightRadius: 5,
          width: 200,
          height: 35,
          backgroundColor: 'white',
          marginHorizontal: 80,
          marginVertical: 10,
          borderRadius: 5,
          borderBottomWidth: 1,
        }}></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          paddingVertical: 2,
          width: 120,
          height: 30,
          marginHorizontal: 120,
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
            marginHorizontal: 120,
            marginTop: 20,
            fontSize: 15,
          }}>
          Buat Akun Baru
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
