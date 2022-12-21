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

const App = () => {
  return (
    <NativeBaseProvider>
      <View style={{ flexDirection: 'row' }}>
        <CText
          events={{
            onPress() {
              AsyncStorage.setItem('user-language', 'ar')
                .then((r) => {
                  console.log(r);
                  I18nManager.allowRTL(true);
                  I18nManager.forceRTL(true);
                  RNRestart.Restart();
                })
                .catch(() => {});
              // i18n.changeLanguage('ar');
            },
          }}
          style={{ width: widthPercentageToDP(20), padding: 5, borderWidth: 1, margin: 2, borderRadius: 5 }}
          text="العربیه"
        />
        <CText
          events={{
            onPress() {
              AsyncStorage.setItem('user-language', 'en')
                .then((r) => {
                  console.log(r);
                  I18nManager.allowRTL(false);
                  I18nManager.forceRTL(false);
                  RNRestart.Restart();
                })
                .catch(() => {});
              // i18n.changeLanguage('en');
            },
          }}
          style={{ width: widthPercentageToDP(20), padding: 5, borderWidth: 1, margin: 2, borderRadius: 5 }}
          text="english"
        />
      </View>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
