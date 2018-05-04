import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import { DayCard, Unscheduled } from './components';
import styles from '../../common/style';

KeyboardManager.setEnableAutoToolbar(false); // removed the 'DONE' button on inputAssessoryView

export default class Agenda extends Component {
  state = {
    agenda: this.props.data.agenda // agenda by date
  };

  editActivity = (day, activity, idx) => {
    this.setState(state => {
      let events = [...state.agenda[day]]; // keep previous events
      events[idx] = { ...events[idx] }; // get event we want to change
      events[idx].activity = activity; // set new agenda
      return { agenda: { ...state.agenda, [day]: events } };
    });
    // need to persist this change too
  };

  deleteActivity = (day, idx) => {
    this.setState(state => {
      let events = [...state.agenda[day]];
      events = events.filter(event => event !== events[idx]);
      return { agenda: { ...state.agenda, [day]: events } };
    });
    // need to persist this change too
  };

  addActivity = day => {
    this.setState(state => {
      const events = [...state.agenda[day]];
      const eventsWithBlankAdded = [
        { activity: '', completed: false },
        ...events
      ];
      return { agenda: { ...state.agenda, [day]: eventsWithBlankAdded } };
    });
    // need to persist this change too
  };

  toggleActivityComplete = (day, idx) => {
    this.setState(state => {
      let events = [...state.agenda[day]];
      events[idx] = {
        ...events[idx],
        completed: !state.agenda[day][idx].completed
      };
      return { agenda: { ...state.agenda, [day]: events } };
    });
    // need to persist this change too
  };

  reassignActivityDate = (days, events, event, idx, day) => {
    this.props.navigator.showLightBox({
      screen: 'travel.agenda.lightbox',
      passProps: {
        days,
        event,
        day,
        dismiss: newDate => {
          this.props.navigator.dismissLightBox();
          this.setState(state => {
            let oldEvents = [...state.agenda[day]];
            let newEvents = [...state.agenda[newDate]];
            // add to newEvents
            newEvents = [...newEvents, event];
            // remove from oldEvents
            oldEvents = oldEvents.filter(event => event !== events[idx]);
            return {
              agenda: {
                ...state.agenda,
                [day]: oldEvents,
                [newDate]: newEvents
              }
            };
          });
          // need to persist this change too
        }
      },
      style: {
        backgroundBlur: 'dark', // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
        backgroundColor: 'transparent', // tint color for the background, you can specify alpha here (optional)
        tapBackgroundToDismiss: true // dismisses LightBox on background taps (optional)
      },
      adjustSoftInput: 'resize' // android only, adjust soft input, modes: 'nothing', 'pan', 'resize', 'unspecified' (optional, default 'unspecified')
    });
  };

  render() {
    const { agenda } = this.state;
    return (
      <ScrollView style={styles.container}>
        <DayCard
          days={Object.keys(agenda)}
          agenda={agenda}
          editActivity={this.editActivity}
          deleteActivity={this.deleteActivity}
          addActivity={this.addActivity}
          toggleActivityComplete={this.toggleActivityComplete}
          reassignActivityDate={this.reassignActivityDate}
        />
      </ScrollView>
    );
  }
}
