import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container: {
    backgroundColor: colors.darkGray,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default styles;
