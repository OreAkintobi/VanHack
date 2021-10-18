import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Success'>;

const SuccessScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Success Screen!</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SuccessScreen;
