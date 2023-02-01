// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';

function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      <NavigationTab />
    </NavigationContainer>
  );
}

export default App;


