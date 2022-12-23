import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import AppNavigator from './navigation/router/RoutesBase';
import { View, I18nManager } from 'react-native';
import CText from './components/atoms/CText';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import './translation';
import i18next from 'i18next';
import userLanguage from './translation/lang/userLanguage';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
