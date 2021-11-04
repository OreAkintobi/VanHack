import React, { createRef, useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Camera } from 'expo-camera';
import * as DeviceInfo from 'expo-device';

import styles from './styles';
import { colors } from '../../constants/Colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Job'>;

const CameraScreen = ({ navigation }: Props) => {
  const [recording, setRecording] = useState('');
  const [counter, setCounter] = useState(0);
  const [cameraTimer, setCameraTimer] = useState<any>(null);
  const camera = createRef<any>();
  const isSimulator = !DeviceInfo.isDevice;
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const triggerTimer = () => {
    let myTimer = setInterval(() => {
      setCounter((previousTime) => previousTime + 1);
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
      const { uri, codec = 'mp4' } = await camera?.current?.recordAsync();

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
      navigation.navigate('Success', { recording });
    }
  };

  const renderCamOrCountDownView = () => {
    return !isSimulator ? (
      <View style={styles.preview}>
        <Camera
          ref={camera}
          style={styles.preview}
          // defaultVideoQuality={Camera.Constants.VideoQuality['720p']}
          type={Camera.Constants.Type.back}
          flashMode={Camera.Constants.FlashMode.on}
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

  useEffect(() => {
    (async () => {
      const { granted } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(granted);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Camera Screen</Text>

      <View style={styles.cameraView}>{renderCamOrCountDownView()}</View>

      <View style={styles.bottomButtonView}>
        <TouchableOpacity
          style={[
            styles.actionButton,
            {
              backgroundColor: colors.vanHackBlue,
            },
          ]}
          onPress={submit}
        >
          <Text style={styles.actionText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: 'red' }]}
          onPress={stop}
        >
          <Text style={styles.actionText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
