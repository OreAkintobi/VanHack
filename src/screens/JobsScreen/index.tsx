import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {JobListItem} from '../../components';
import {RootState} from '../../store';
import {fetchJobs} from '../../store/jobs';

// import styles from './styles';

const JobsScreen = () => {
  const dispatch = useDispatch();
  const {jobs, loading} = useSelector((state: RootState) => state.jobs);

  const renderItem = ({item}: any) => <JobListItem job={item} />;

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onRefresh={() => dispatch(fetchJobs())}
        refreshing={loading}
      />
    </SafeAreaView>
  );
};

export default JobsScreen;
