import React, { memo } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { JobsData } from '../../types';
import { VanHackLogo } from '../../assets/images';
import { View, Text, SecondaryText, BottomTab } from '..';
import {
  getCountry,
  getJobPostingTimeFromNow,
  getRelocationStatus,
} from '../../utils';

import styles from './styles';

interface JobListItemProps {
  job: JobsData;
  onPressJobItem: () => void;
}

const JobListItem = ({ job, onPressJobItem }: JobListItemProps) => {
  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={onPressJobItem}
    >
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
            <SecondaryText numberOfLines={1} style={styles.jobText}>
              {job?.location}
            </SecondaryText>
          </View>
          <View style={styles.dataContainer}>
            <SecondaryText numberOfLines={1} style={styles.jobText}>
              {job?.companyName}
            </SecondaryText>
          </View>
          <View style={styles.dataContainer}>
            <SecondaryText numberOfLines={1} style={styles.jobText}>
              {job?.currency} {job?.salaryFrom} - {job?.salaryTo}
            </SecondaryText>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.bottomTabsContainer}>
          <BottomTab title="Full Time" />
          {getCountry(job?.flagCode) && (
            <BottomTab title={getCountry(job?.flagCode) || ''} />
          )}
          <BottomTab title={getRelocationStatus(job?.relocate)} />
        </View>

        <View style={styles.timeText}>
          {!job?.canApply && <BottomTab isExpired title="Expired" />}

          <SecondaryText
            numberOfLines={1}
            style={[styles.jobText, { textAlignVertical: 'center' }]}
          >
            {getJobPostingTimeFromNow(job?.createdAt)}
          </SecondaryText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(JobListItem);
