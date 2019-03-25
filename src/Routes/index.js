import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

// paginas criadas para navegacao
import Welcome from '~/pages/Welcome';
import Repository from '~/pages/Repository';
import Issues from '~/pages/Issues';

import { colors } from '~/styles';

const Routes = (user = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Repository,
      Issues,
    },
    {
      initialRouteName: user ? 'Repository' : 'Welcome',
    },
  ),
);

export default Routes;
