import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  touchableContainer: {
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#1c1c25',
    borderRadius: 12,
    justifyContent: 'space-between',
    // height: 110,
  },
  jobItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  jobContentView: {
    flex: 5,
  },
  dataContainer: {
    flexDirection: 'row',
  },
  jobImage: {
    marginRight: 16,
  },
  imageStyle: {
    height: 60,
    aspectRatio: 1,
    borderRadius: 12,
  },
  jobTitleText: {
    fontSize: 14,
    color: 'white',
    lineHeight: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobText: {
    fontSize: 10,
    color: '#3a3b43',
    lineHeight: 12,
    marginBottom: 2,
  },
});

export default styles;
