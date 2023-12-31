import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Router from '../src/Screens/Router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
