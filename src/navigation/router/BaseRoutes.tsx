import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavRouter from './BottomNavRouter';
import Splash from '../../routs/start/Splash';
import Login from '../../routs/start/Login';
import { RoutsEnum } from './RoutsEnum';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RoutsEnum.Splash} component={Splash} />
      <Stack.Screen name={RoutsEnum.Login} component={Login} />
      <Stack.Screen name={'BottomNavRouter'} component={BottomNavRouter} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
