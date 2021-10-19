import React, {memo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import moment from 'moment';
import {JobsData} from '../../types';
import {VanHackLogo} from '../../assets';
import {getCountry, getRelocationStatus} from '../../utils';

import styles from './styles';
import BottomTab from '../BottomTab';

interface JobListItemProps {
  job: JobsData;
  onPressJobItem: () => void;
}

const JobListItem = ({job, onPressJobItem}: JobListItemProps) => {
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

      <View style={styles.bottomSection}>
        <View style={styles.bottomTabsContainer}>
          <BottomTab title="Full Time" />
          {getCountry(job) && <BottomTab title={getCountry(job) || ''} />}
          <BottomTab title={getRelocationStatus(job)} />
        </View>

        <View style={styles.timeText}>
          <Text numberOfLines={1} style={styles.jobText}>
            {moment(job?.createdAt).fromNow()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(JobListItem);
