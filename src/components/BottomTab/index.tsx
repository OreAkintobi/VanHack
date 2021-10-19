import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

interface JobListItemProps {
  title: string;
  isExpired?: boolean;
}

const BottomTab = ({title, isExpired = false}: JobListItemProps) => {
  const containerStyle = isExpired
    ? [styles.container, {backgroundColor: 'red'}]
    : styles.container;

  return (
    <View style={containerStyle}>
      <Text style={styles.jobText}>{title}</Text>
    </View>
  );
};

export default BottomTab;
