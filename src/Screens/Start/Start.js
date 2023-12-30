import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const Start = ({navigation}) => {
  return (
    <View>
      <Image source={require('../../aset/image/iconstart.jpg')} style={{width:450,height:200,marginHorizontal:1}}/>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          height: 40,
          width: 150,
          backgroundColor: 'white',
          marginTop: 80,
          marginHorizontal: 140,
          elevation: 3,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Pergi Ke Profil
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Start;
