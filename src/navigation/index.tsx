import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CameraScreen, JobScreen, JobsScreen, SuccessScreen} from '../screens';
import {JobsData} from '../types';
import {colors} from '../theme';

export type RootStackParamList = {
  Camera: undefined;
  Jobs: undefined;
  Job: {job: JobsData};
  Success: {recording: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name="Jobs" component={JobsScreen} />
          <Stack.Screen
            name="Job"
            component={JobScreen}
            options={{
              headerShown: true,
              headerTitle: 'Job Details',
              headerTitleStyle: {
                fontSize: 14,
              },
              headerShadowVisible: false,
              headerTintColor: colors.white,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.black,
              },
            }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="Camera"
            component={CameraScreen}
            options={{
              headerShown: true,
              headerTitle: 'Camera',
              headerTitleStyle: {
                fontSize: 14,
              },
              headerShadowVisible: false,
              headerTintColor: colors.white,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.black,
              },
            }}
          />
          <Stack.Screen name="Success" component={SuccessScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
