import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.black,
    paddingHorizontal: 16,
  },
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  failureText: {
    fontSize: 48,
    color: 'red',
    fontWeight: '700',
    textAlign: 'center',
  },
  successText: {
    fontSize: 48,
    color: colors.seaGreen,
    fontWeight: '700',
    textAlign: 'center',
  },
  detailText: {
    fontSize: 24,
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
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
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;
