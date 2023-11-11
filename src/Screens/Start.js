import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const Start = ({navigation}) => {
  return (
    <View>
      <Text>halo world</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profil')}
        style={{height: 100, width: 100, backgroundColor: 'blue'}}>
        <Text>pergi ke profil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Start;
