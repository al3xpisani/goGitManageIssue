import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    marginLeft: metrics.baseMargin * 2,
    marginRight: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding - 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: metrics.baseRadius,
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: 'bold',
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
});

export default styles;
