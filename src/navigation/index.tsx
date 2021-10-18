import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {JobScreen, JobsScreen, SuccessScreen} from '../screens';
import {JobsData} from '../types';

export type RootStackParamList = {
  Jobs: undefined;
  Job: {job: JobsData};
  Success: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Jobs" component={JobsScreen} />
          <Stack.Screen name="Job" component={JobScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Success" component={SuccessScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
