import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {JobListItem} from '../../components';
import {RootState} from '../../store';
import {fetchJobs} from '../../store/jobs';
import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Jobs'>;

const JobsScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {jobs, loading} = useSelector((state: RootState) => state.jobs);

  const renderItem = ({item}: any) => (
    <JobListItem
      job={item}
      onPressJobItem={() => navigation.navigate('Job', {job: item})}
    />
  );

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <FlatList
          data={jobs}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onRefresh={() => dispatch(fetchJobs())}
          refreshing={loading}
        />
      )}
    </View>
  );
};

export default JobsScreen;
