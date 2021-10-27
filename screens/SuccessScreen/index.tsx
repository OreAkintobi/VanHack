import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

import styles from './styles';
import { colors } from '../../constants/Colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Success'>;

const SuccessScreen = ({ route, navigation }: Props) => {
  const recording = route?.params?.recording;
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);
  const isRecordingFailed = recording.trim() === '';

  const successText = isRecordingFailed ? 'Oops' : 'Success!';

  const successStyle = isRecordingFailed
    ? styles.failureText
    : styles.successText;

  const buttonStyle = isRecordingFailed
    ? [styles.applyButton, { backgroundColor: 'red' }]
    : applied
    ? [styles.applyButton, { backgroundColor: colors.seaGreen }]
    : styles.applyButton;

  const buttonText = isRecordingFailed
    ? 'Go Back'
    : applied
    ? 'Applied'
    : 'Apply Now';

  const detailText = isRecordingFailed
    ? 'Your video was not successfully recorded. Please try again.'
    : `Your video, ${recording} has been successfully saved. Please click
  'Apply' to complete your application!`;

  const apply = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setApplied(true);
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (applied) {
      setTimeout(() => {
        navigation.navigate('Jobs');
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applied]);

  return (
    <View style={styles.container}>
      {open ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <>
          <Text style={successStyle}>{successText}</Text>
          <Text style={styles.detailText}>{detailText}</Text>
          <TouchableOpacity
            style={buttonStyle}
            onPress={isRecordingFailed ? navigation.goBack : apply}
          >
            <Text style={styles.applyButtonText}>
              {loading ? (
                <ActivityIndicator size="small" style={styles.loader} />
              ) : (
                buttonText
              )}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default SuccessScreen;
