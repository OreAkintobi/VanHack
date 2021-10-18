import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingTop: 50,
  },
  headerView: {
    paddingVertical: 20,
    backgroundColor: colors.offBlack,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.white,
  },
});

export default styles;
