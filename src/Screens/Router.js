import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './Login/Login/';
import Start from './Start/Start';
import Reqister from './Reqister/Reqister';
import Home from './Home/Home';
import Profil from './Profil/Profil';
import Blog from './Blog/Blog';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Tab.Navigator
      activeColor="#e91e63"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarLabel: 'Blog',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Reqister" component={Reqister} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Router" component={Router} />
    </Stack.Navigator>
  );
}

export default App;
