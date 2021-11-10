import React from 'react';
import { Platform, ColorSchemeName } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import Colors from '../constants/Colors';
import { RootStackParamList } from '../types';
import useColorScheme from '../hooks/useColorScheme';
import { CameraScreen, JobScreen, JobsScreen, SuccessScreen } from '../screens';
import { Snackbar } from 'react-native-paper';
import { Text } from '../components';
import { closeSnackBar } from '../store/snackBar';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const theme = useColorScheme();
  const dispatch = useDispatch();
  const { text, visible } = useSelector((state: RootState) => state.snackBar);
  const close = () => dispatch(closeSnackBar());

  return (
    <>
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
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
                headerTintColor: Colors[theme].tint,
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: Colors[theme].background,
                },
              }}
            />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
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
                headerTintColor: Colors[theme].tint,
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: Colors[theme].background,
                },
              }}
            />
            <Stack.Screen name="Success" component={SuccessScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>

      <Snackbar
        visible={visible}
        onDismiss={() => close()}
        action={{
          label: 'Close Me.',
          onPress: () => {
            // Do something
          },
        }}
        style={{ backgroundColor: 'blue' }}
      >
        <Text>{text}</Text>
      </Snackbar>
    </>
  );
};

export default AppNavigator;