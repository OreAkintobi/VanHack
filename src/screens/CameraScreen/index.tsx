import React, {createRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import {RNCamera} from 'react-native-camera';
import * as DeviceInfo from 'expo-device';

import styles from './styles';
import {colors} from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Job'>;

const CameraScreen = ({navigation}: Props) => {
  const [recording, setRecording] = useState('');
  const [counter, setCounter] = useState(0);
  const [cameraTimer, setCameraTimer] = useState<any>(null);
  const camera = createRef<any>();
  const isSimulator = !DeviceInfo.isDevice;

  const triggerTimer = () => {
    let myTimer = setInterval(() => {
      setCounter(previousTime => previousTime + 1);
    }, 1000);

    setCameraTimer(myTimer);
  };

  const stopTimer = () => {
    clearInterval(cameraTimer);
    setCounter(0);
  };

  const submit = async () => {
    if (!isSimulator) {
      triggerTimer();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {uri, codec = 'mp4'} = await camera?.current?.recordAsync();

      setRecording(uri);
    } else {
      setRecording('file:///data/user/0/com.vanhack/cache/Camera/myrecording');
    }
  };

  const stop = async () => {
    await camera?.current?.stopRecording();
    stopTimer();

    if (
      recording.trim() !== ' ' ||
      recording !== undefined ||
      recording !== null
    ) {
      navigation.navigate('Success', {recording});
    }
  };

  const renderCamOrCountDownView = () => {
    return !isSimulator ? (
      <View style={styles.preview}>
        <RNCamera
          ref={camera}
          style={styles.preview}
          defaultVideoQuality={RNCamera.Constants.VideoQuality['720p']}
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
        <View style={styles.cameraTimer}>
          <Text style={styles.countDownText}>{counter}</Text>
        </View>
      </View>
    ) : (
      <View style={styles.preview}>
        <Text style={styles.countDownText}>{counter}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraView}>{renderCamOrCountDownView()}</View>

      <View style={styles.bottomButtonView}>
        <TouchableOpacity
          style={[
            styles.actionButton,
            {
              backgroundColor: colors.vanHackBlue,
            },
          ]}
          onPress={submit}>
          <Text style={styles.actionText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, {backgroundColor: 'red'}]}
          onPress={stop}>
          <Text style={styles.actionText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
