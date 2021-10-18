import React, {createRef, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import {RNCamera} from 'react-native-camera';

import styles from './styles';
import {colors} from '../../theme';

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
    );
  };

  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '90%'}}>{renderCam()}</View>

      <View style={{flexDirection: 'row', height: '10%'}}>
        <TouchableOpacity
          style={[
            styles.actionButton,
            {
              backgroundColor: colors.vanHackBlue,
            },
          ]}
          onPress={submit}>
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.actionButton,
            {
              backgroundColor: 'red',
            },
          ]}
          onPress={stop}>
          <Text>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
