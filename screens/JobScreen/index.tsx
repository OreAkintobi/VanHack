/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { JobsData } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { VanHackLogo } from '../../assets/images';
import { colors } from '../../constants/Colors';
import {
  getCountry,
  getJobPostingTimeFromNow,
  getRelocationStatus,
  getSalary,
} from '../../utils';

import { Text, View, SecondaryText } from '../../components';

type Props = NativeStackScreenProps<RootStackParamList, 'Job'>;

const JobScreen = ({ route, navigation }: Props) => {
  const { params } = route;
  const job: JobsData = params?.job;
  const buttonStyle = job?.canApply
    ? styles.applyButton
    : [styles.applyButton, { backgroundColor: 'red' }];

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={{ alignItems: 'center' }}>
          <View>
            <Image
              source={VanHackLogo}
              resizeMode="contain"
              style={styles.imageStyle}
            />
          </View>

          <Text style={styles.jobTitleText}>{job?.title}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.jobText}>
              {job?.companyName} <Text style={styles.interpunct}> · </Text>{' '}
              <SecondaryText style={styles.jobText2}>
                {job?.location}
              </SecondaryText>
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SecondaryText style={styles.jobText2}>
              Posted :{' '}
              <Text style={styles.jobText}>
                {getJobPostingTimeFromNow(job?.createdAt)}
              </Text>
              {!job?.canApply && (
                <Text style={[styles.jobText, { color: 'red' }]}>
                  {'  '}Expired
                </Text>
              )}
            </SecondaryText>
          </View>
        </View>

        <View style={styles.topDetailsContainer}>
          <View style={styles.detailView}>
            <SecondaryText style={styles.jobText2}>Salary</SecondaryText>
            <Text style={styles.jobText}>{getSalary(job)}</Text>
          </View>

          <Text style={styles.bar}>|</Text>

          <View style={styles.detailView}>
            <SecondaryText style={styles.jobText2}>Country</SecondaryText>
            <Text style={styles.jobText}>{getCountry(job?.flagCode)}</Text>
          </View>
        </View>

        <View style={styles.topDetailsContainer}>
          <View style={styles.detailView}>
            <SecondaryText style={styles.jobText2}>Job Type</SecondaryText>
            <Text style={styles.jobText}>{job?.jobType}</Text>
          </View>

          <Text style={styles.bar}>|</Text>

          <View style={styles.detailView}>
            <SecondaryText style={styles.jobText2}>Area</SecondaryText>
            <Text style={styles.jobText}>{job?.area}</Text>
          </View>

          <Text style={styles.bar}>|</Text>

          <View style={styles.detailView}>
            <SecondaryText style={styles.jobText2}>Option</SecondaryText>
            <Text style={styles.jobText}>
              {getRelocationStatus(job?.relocate)}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 4, justifyContent: 'flex-start' }}>
        <ScrollView>
          <View style={{ marginVertical: 16 }}>
            <Text style={[styles.jobText, { color: colors.white }]}>
              Overview
            </Text>
            <Text style={styles.jobText}>{job?.description}</Text>
          </View>

          <View style={{ marginVertical: 16 }}>
            <Text style={[styles.jobText, { color: colors.white }]}>
              Skills
            </Text>
            <Text style={styles.jobText}>{job?.skills}</Text>
          </View>
        </ScrollView>
      </View>

      <View style={{ flex: 1.5 }}>
        <TouchableOpacity
          style={buttonStyle}
          disabled={!job?.canApply}
          onPress={() => navigation.navigate('Camera')}
        >
          <Text style={styles.applyButtonText}>
            {job?.canApply ? 'Apply Now' : 'This Posting has Expired'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobScreen;
