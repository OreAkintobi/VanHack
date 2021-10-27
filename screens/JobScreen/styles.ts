import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  topSection: {
    flex: 4,
  },
  jobTitleText: {
    fontSize: 20,
    fontWeight: '800',
  },
  jobText: {
    fontSize: 12,
    color: colors.vanHackBlue,
    marginBottom: 2,
  },
  jobText2: {
    fontSize: 12,
    marginBottom: 2,
  },
  interpunct: {
    fontSize: 16,
  },
  imageStyle: {
    height: 100,
    aspectRatio: 1,
    borderRadius: 12,
    marginBottom: 24,
  },
  topDetailsContainer: {
    width: '100%',
    marginVertical: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.darkGray,
    borderWidth: 1,
  },
  detailView: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  bar: {
    color: colors.darkGray,
    fontSize: 16,
  },
  applyButton: {
    width: '100%',
    backgroundColor: colors.vanHackBlue,
    borderRadius: 8,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;
