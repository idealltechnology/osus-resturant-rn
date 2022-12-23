import React from 'react';
import { RoutsEnum } from './RoutsEnum';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavRouter from './BottomNavRouter';
import Splash from '../../routs/Splash';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Splash'} component={Splash} />
      <Stack.Screen name={'BottomNavRouter'} component={BottomNavRouter} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
