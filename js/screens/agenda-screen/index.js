import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { DayCard, Unscheduled } from './components';
import styles from '../../common/style';

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
        />
      </ScrollView>
    );
  }
}
