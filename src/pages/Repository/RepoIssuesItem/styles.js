import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics } from '~/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginLeft: metrics.baseMargin * 2,
    marginRight: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding - 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
  },
  avatar: {
    margin: metrics.baseMargin - 10,
    width: 50,
    height: 50,
  },
  viewTitle: {
    margin: metrics.baseMargin,
    flexDirection: 'column',
  },
  viewIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {},
});

export default styles;
