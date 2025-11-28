import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Details from '../screens/Details';

import Home from '../screens/Home';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from '../@types/navigation';
import CreateForm from '../screens/CreateForm';


const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="CreateForm" component={CreateForm} />
  <Stack.Screen name="Details" component={Details} />
</Stack.Navigator>

  );
}
export default Routes;
