import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../screens';
import TabNavigator from './TabNavigator';

const MainNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  TabNavigator: {
    screen: TabNavigator
  }
},
{
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default MainNavigator;
