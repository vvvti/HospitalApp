import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/HomeScreen';
import {DevicesScreen} from '../screens/DevicesScreen';
import {CustomersScreen} from '../screens/CustomersScreen';
import {OrdersScreen} from '../screens/OrdersScreen';

const RootStack = createStackNavigator();

export const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator>
    <RootStack.Screen name="HomeScreen" component={HomeScreen} />
    <RootStack.Screen name="DevicesScreen" component={DevicesScreen} />
    <RootStack.Screen name="OrdersScreen" component={OrdersScreen} />
    <RootStack.Screen name="CustomersScreen" component={CustomersScreen} />
  </RootStack.Navigator>
);