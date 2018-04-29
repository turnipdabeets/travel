import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR } from './index';
import { colors } from 'react-native-elements';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR
  },
  icon: {
    padding: 16
  },
  cardStyle: { padding: 0 },
  cardDivider: {
    marginBottom: 0,
    backgroundColor: colors.greyOutline
  },
  cardTitle: { marginTop: 15 }
});
