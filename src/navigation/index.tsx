import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {JobScreen, JobsScreen} from '../screens';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jobs" component={JobsScreen} />
        <Stack.Screen name="Job" component={JobScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
