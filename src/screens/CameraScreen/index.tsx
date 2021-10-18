import React, {createRef} from 'react';
import {Button, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import {RNCamera} from 'react-native-camera';

import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Job'>;

const CameraScreen = ({navigation}: Props) => {
  const camera = createRef<any>();

  const submit = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {uri, codec = 'mp4'} = await camera?.current?.recordAsync();
    console.info(uri);
    if (uri.trim() !== ' ' || uri !== undefined || uri !== null) {
      navigation.navigate('Success');
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
      <Button title="Apply" onPress={submit} />
      <Button title="Stop" onPress={stop} />
      <View style={{width: '90%', height: '90%'}}>{renderCam()}</View>
    </View>
  );
};

export default CameraScreen;
