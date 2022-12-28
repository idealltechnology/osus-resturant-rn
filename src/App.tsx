import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import AppNavigator from './navigation/router/BaseRoutes';
import './translation';
import Orientation from 'react-native-orientation';
import isTablet from './utilities/isTablet';

const App = () => {
  isTablet() ? Orientation.lockToLandscape() : Orientation.lockToPortrait();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
