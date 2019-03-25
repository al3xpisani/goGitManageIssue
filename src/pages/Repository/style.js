import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics } from '~/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  addRepoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: metrics.baseMargin * 2,
    paddingBottom: metrics.basePadding,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  inputText: {
    backgroundColor: colors.white,
    marginRight: metrics.baseMargin,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: width - 65,
    borderColor: colors.light,
    fontSize: 14,
  },
});

export default styles;
