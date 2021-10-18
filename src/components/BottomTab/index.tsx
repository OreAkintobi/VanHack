import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

interface JobListItemProps {
  title: string;
}

const BottomTab = ({title}: JobListItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.jobText}>{title}</Text>
    </View>
  );
};

export default BottomTab;
