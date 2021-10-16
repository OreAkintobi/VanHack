import React from 'react';
import {View, Text} from 'react-native';
import {JobsData} from '../../types';

import styles from './styles';

interface JobListItemProps {
  job: JobsData;
}

const JobListItem = ({job}: JobListItemProps) => {
  return (
    <View style={styles.jobItemContainer} key={job.id}>
      <View style={styles.dataContainer}>
        <Text>Title: </Text>
        <Text>{job.title}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text>Location: </Text>
        <Text>{job.location}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text>Company: </Text>
        <Text>{job.companyName}</Text>
      </View>
    </View>
  );
};

export default JobListItem;
