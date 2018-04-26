import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';
import {
  registerScreens,
  registerScreenVisibilityListener
} from './js/screens';

registerScreens();
registerScreenVisibilityListener();

export const navigatorStyle = {
  navBarBackgroundColor: '#A43820',
  navBarTextColor: '#ffffFF',
  statusBarTextColorScheme: 'light',
  drawUnderNavBar: false
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'travel.Outline',
    title: 'Trip Planner',
    navigatorStyle,
    overrideBackPress: true
  }
});
