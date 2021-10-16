import React from 'react';
import {useRoute} from '@react-navigation/core';
import {Button, Text, View} from 'react-native';
import styles from './styles';
import {JobsData} from '../../types';

const JobScreen = () => {
  const {params} = useRoute();
  const job: JobsData = params?.job;

  return (
    <View style={styles.container}>
      <Text>Company: {job.companyName}</Text>
      <Text>Job Type: {job.jobType}</Text>
      <Button title="Apply" />
    </View>
  );
};

export default JobScreen;
