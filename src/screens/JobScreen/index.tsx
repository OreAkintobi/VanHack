import React, {useRef} from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles';
import {JobsData} from '../../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import VideoRecorder from 'react-native-beautiful-video-recorder';
import {RootStackParamList} from '../../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Job'>;

const JobScreen = ({route}: Props) => {
  const {params} = route;
  const job: JobsData = params?.job;
  const videoRecorder = useRef<any>(null);

  const start = async () => {
    videoRecorder?.current?.open({maxLength: 30}, (data: any) => {
      console.log('captured data', data);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Company: {job.companyName}</Text>
      <Text>Job Type: {job.jobType}</Text>
      <Button title="Apply" onPress={start} />
      <VideoRecorder ref={videoRecorder} />
    </View>
  );
};

export default JobScreen;
