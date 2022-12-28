import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavRouter from './BottomNavRouter';
import Splash from '../../routs/start/Splash';
import Login from '../../routs/start/Login';
import { RoutsEnum } from './RoutsEnum';

import NewOrder from '../../routs/bottomRouted/NewOrder';
import OrderList from '../../routs/bottomRouted/OrderList';
import Products from '../../routs/bottomRouted/Products';
import Reservation from '../../routs/bottomRouted/Reservation';
import Transaction from '../../routs/bottomRouted/Transaction';
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

      <Stack.Screen name={RoutsEnum.NewOrder} component={NewOrder} />
      <Stack.Screen name={RoutsEnum.OrderList} component={OrderList} />
      <Stack.Screen name={RoutsEnum.Products} component={Products} />
      <Stack.Screen name={RoutsEnum.Reservation} component={Reservation} />
      <Stack.Screen name={RoutsEnum.Transaction} component={Transaction} />
      {/* <Stack.Screen name={RoutsEnum.BottomNavRouter} component={BottomNavRouter} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
