import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profil from './Screens/Profil';
import Start from './Screens/Start';
import Reqister from './Screens/Reqister';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Reqister" component={Reqister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
