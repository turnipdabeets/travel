import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';
import {
  registerScreens,
  registerScreenVisibilityListener
} from './js/screens';
import { PRIMARY_COLOR, BACKGROUND_COLOR, WHITE } from './js/common';

registerScreens();
registerScreenVisibilityListener();

export const navigatorStyle = {
  navBarBackgroundColor: PRIMARY_COLOR,
  navBarTextColor: WHITE,
  navBarButtonColor: WHITE,
  navBarSubtitleColor: BACKGROUND_COLOR,
  navBarSubtitleFontSize: 13
  // statusBarTextColorScheme: 'light',
  // drawUnderNavBar: false
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'travel.Outline',
    title: 'Itinerary',
    navigatorStyle,
    overrideBackPress: true
  }
});
