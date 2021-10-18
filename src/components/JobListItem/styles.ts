import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  touchableContainer: {
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#272831',
    borderRadius: 12,
    justifyContent: 'space-between',
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
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobText: {
    fontSize: 10,
    color: colors.darkGray,
    marginBottom: 2,
  },
  bottomTabsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  timeText: {
    width: '20%',
  },
});

export default styles;
