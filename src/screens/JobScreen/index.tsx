/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {JobsData} from '../../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import {VanHackLogo} from '../../assets';
import {colors} from '../../theme';
import {
  getCountry,
  getJobPostingTimeFromNow,
  getRelocationStatus,
  getSalary,
} from '../../utils';

type Props = NativeStackScreenProps<RootStackParamList, 'Job'>;

const JobScreen = ({route, navigation}: Props) => {
  const {params} = route;
  const job: JobsData = params?.job;
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.jobImage}>
            <Image
              source={VanHackLogo}
              resizeMode="contain"
              style={styles.imageStyle}
            />
          </View>

          <Text style={styles.jobTitleText}>{job?.title}</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.jobText}>
              {job?.companyName} <Text style={styles.interpunct}> · </Text>{' '}
              <Text style={styles.jobText2}>{job?.location}</Text>
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.jobText2}>
              Posted :
              <Text style={styles.jobText}>
                {getJobPostingTimeFromNow(job?.createdAt)}
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.topDetailsContainer}>
          <View style={styles.detailView}>
            <Text style={styles.jobText2}>Salary</Text>
            <Text style={styles.jobText}>{getSalary(job)}</Text>
          </View>

          <Text style={styles.bar}>|</Text>

          <View style={styles.detailView}>
            <Text style={styles.jobText2}>Country</Text>
            <Text style={styles.jobText}>{getCountry(job?.flagCode)}</Text>
          </View>
        </View>

        <View style={styles.topDetailsContainer}>
          <View style={styles.detailView}>
            <Text style={styles.jobText2}>Job Type</Text>
            <Text style={styles.jobText}>{job?.jobType}</Text>
          </View>

          <Text style={styles.bar}>|</Text>

          <View style={styles.detailView}>
            <Text style={styles.jobText2}>Area</Text>
            <Text style={styles.jobText}>{job?.area}</Text>
          </View>

          <Text style={styles.bar}>|</Text>

          <View style={styles.detailView}>
            <Text style={styles.jobText2}>Option</Text>
            <Text style={styles.jobText}>
              {getRelocationStatus(job?.relocate)}
            </Text>
          </View>
        </View>
      </View>

      <View style={{flex: 4, justifyContent: 'flex-start'}}>
        <ScrollView>
          <View style={{marginVertical: 16}}>
            <Text style={[styles.jobText, {color: colors.white}]}>
              Overview
            </Text>
            <Text style={styles.jobText}>{job?.description}</Text>
          </View>

          <View style={{marginVertical: 16}}>
            <Text style={[styles.jobText, {color: colors.white}]}>Skills</Text>
            <Text style={styles.jobText}>{job?.skills}</Text>
          </View>
        </ScrollView>
      </View>

      <View style={{flex: 1.5}}>
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => navigation.navigate('Camera')}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobScreen;
