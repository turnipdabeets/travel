import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import Outline from './outline-screen';
import Travel from './travel-screen';
import Accomodations from './accomodations-screen';
import Agenda from './agenda-screen';
import Notes from './notes-screen';
import DateLightBox from './lightbox-screen';

export function registerScreens() {
  Navigation.registerComponent('travel.Outline', () => Outline);
  Navigation.registerComponent('travel.outline.Travel', () => Travel);
  Navigation.registerComponent(
    'travel.outline.Accomodations',
    () => Accomodations
  );
  Navigation.registerComponent('travel.outline.Agenda', () => Agenda);
  Navigation.registerComponent('travel.outline.Notes', () => Notes);
  Navigation.registerComponent('travel.agenda.lightbox', () => DateLightBox);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) =>
      console.log(
        'screenVisibility',
        `Screen ${screen} displayed in ${endTime -
          startTime} millis [${commandType}]`
      ),
    willDisappear: ({ screen }) =>
      console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
