import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.white,
    marginTop: metrics.baseMargin,
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  userInexistente: {
    color: colors.danger,
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },
  viewUserInexistente: {
    alignItems: 'center',
  },
});

export default welcomeStyles;
