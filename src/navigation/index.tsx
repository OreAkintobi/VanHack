import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {JobScreen, JobsScreen} from '../screens';
import {JobsData} from '../types';

export type RootStackParamList = {
  Jobs: undefined;
  Job: {job: JobsData};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jobs" component={JobsScreen} />
        <Stack.Screen name="Job" component={JobScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
