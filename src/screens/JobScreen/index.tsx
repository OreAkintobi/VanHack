import React, {createRef} from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';
import {JobsData} from '../../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import {RNCamera} from 'react-native-camera';

type Props = NativeStackScreenProps<RootStackParamList, 'Job'>;

const JobScreen = ({route}: Props) => {
  const {params} = route;
  const job: JobsData = params?.job;
  const camera = createRef<any>();

  const submit = async () => {
    if (camera && camera.current) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {uri, codec = 'mp4'} = await camera.current.recordAsync();
      console.info(uri);
    }
  };

  const stop = async () => {
    await camera?.current?.stopRecording();
  };

  const renderCam = () => {
    return (
      <RNCamera
        ref={camera}
        style={styles.preview}
        defaultVideoQuality={RNCamera.Constants.VideoQuality['480p']}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text>Company: {job.companyName}</Text>
      <Text>Job Type: {job.jobType}</Text>
      <Button title="Apply" onPress={submit} />
      <Button title="Stop" onPress={stop} />

      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>{renderCam()}</View>
        </View>
      </View>
    </View>
  );
};

export default JobScreen;
