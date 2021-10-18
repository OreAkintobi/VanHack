import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {JobsData} from '../../types';
import {VanHackLogo} from '../../assets';
import {countries} from '../../data';

import styles from './styles';
import BottomTab from '../BottomTab';

interface JobListItemProps {
  job: JobsData;
  onPressJobItem: () => void;
}

const JobListItem = ({job, onPressJobItem}: JobListItemProps) => {
  const relocationStatus =
    job?.relocate === 'RemoteRelocate'
      ? 'Remote, then Relocate'
      : job?.relocate;

  const country = countries.filter(item => item.code === job?.flagCode)[0]
    ?.name;

  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={onPressJobItem}>
      <View style={styles.jobItemContainer} key={job?.id}>
        <View style={styles.jobImage}>
          <Image
            source={VanHackLogo}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </View>

        <View style={styles.jobContentView}>
          <View style={styles.dataContainer}>
            <Text numberOfLines={1} style={styles.jobTitleText}>
              {job?.title}
            </Text>
          </View>
          <View style={styles.dataContainer}>
            <Text numberOfLines={1} style={styles.jobText}>
              {job?.location}
            </Text>
          </View>
          <View style={styles.dataContainer}>
            <Text numberOfLines={1} style={styles.jobText}>
              {job?.companyName}
            </Text>
          </View>
          <View style={styles.dataContainer}>
            <Text numberOfLines={1} style={styles.jobText}>
              {job?.currency} {job?.salaryFrom} - {job?.salaryTo}
            </Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <BottomTab title="Full Time" />
        <BottomTab title={country} />
        <BottomTab title={relocationStatus} />
        <BottomTab title={job?.jobType} />
      </View>
    </TouchableOpacity>
  );
};

export default JobListItem;
