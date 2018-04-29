import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Card, colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-swipeable';
import { EditableText, Title } from '../components';
import { ICON_COLOR, WHITE, BUTTONSIZE, GREEN } from '../../../common';
import _styles from '../../../common/style';

class ActivityRow extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    // always reset state from props
    return {
      events: nextProps.events
    };
  }

  state = {
    events: this.props.events
  };

  toggleActivityComplete = (activity, idx) => {
    this.setState(state => {
      let events = [...state.events];
      events[idx] = { ...events[idx], completed: !state.events[idx].completed };
      return {
        events
      };
    });
  };

  render() {
    const { day, setActivity, deleteActivity } = this.props;
    const { events } = this.state;
    return events.map((event, i) => {
      return (
        <View key={i}>
          <View style={_styles.divider} />
          <Swipeable
            leftContent={
              <View style={{ backgroundColor: GREEN }}>
                <Icon
                  style={styles.swipeButtonLeft}
                  name="check"
                  size={15}
                  color={WHITE}
                />
              </View>
            }
            onLeftActionRelease={() => this.toggleActivityComplete(event, i)}
            rightButtonWidth={BUTTONSIZE}
            rightButtons={[
              <View style={{ backgroundColor: ICON_COLOR }}>
                <Icon
                  onPress={() => deleteActivity(day, i)}
                  style={styles.swipeButtonRight}
                  name="trash"
                  size={15}
                  color={WHITE}
                />
              </View>
            ]}
          >
            <View style={styles.activityWrapper}>
              <View style={styles.activityRow}>
                <Icon
                  style={styles.activityIcon}
                  name={event.completed ? 'check' : 'bell-o'}
                  size={15}
                  color={'grey'}
                />
                <EditableText
                  text={event.activity}
                  style={styles.activityRowText}
                  sendText={activity => setActivity(day, activity, i)}
                />
              </View>
            </View>
          </Swipeable>
        </View>
      );
    });
  }
}

class DayCard extends React.Component {
  state = this.props.data.agenda; // agenda by date

  setActivity = (day, activity, idx) => {
    this.setState(state => {
      let events = [...state[day]]; // keep previous events
      events[idx] = { ...events[idx] }; // get event we want to change
      console.log('before change', state[day]);
      events[idx].activity = activity; // set new agenda
      console.log('EVENTS', events);
      return { [day]: events };
    });
    // need to persist this change too
  };

  deleteActivity = (day, idx) => {
    this.setState(state => {
      let events = [...state[day]];
      events = events.filter(event => event !== events[idx]);
      return { [day]: events };
    });
    // need to persist this change too
  };

  addEmptyEvent = day => {
    this.setState(state => {
      const events = [...state[day]];
      const eventsWithBlankAdded = [{}, ...events];
      return { [day]: eventsWithBlankAdded };
    });
  };

  render() {
    const days = Object.keys(this.state);
    return days.map((day, i) => (
      <Card
        key={i}
        title={<Title title={day} onPress={() => this.addEmptyEvent(day)} />}
        containerStyle={_styles.cardStyleEndToEnd}
        dividerStyle={_styles.cardDivider}
        titleStyle={_styles.cardTitle}
      >
        <ActivityRow
          events={this.state[day]}
          day={day}
          setActivity={this.setActivity}
          deleteActivity={this.deleteActivity}
        />
      </Card>
    ));
  }
}

export default DayCard;

const styles = StyleSheet.create({
  activityWrapper: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 5
  },
  activityRow: { flexDirection: 'row', flexWrap: 'wrap' },
  activityRowText: { fontSize: 12 },
  activityIcon: { paddingRight: 10 },
  swipeButtonRight: { paddingTop: 10, paddingBottom: 10, marginLeft: 20 },
  swipeButtonLeft: { paddingTop: 10, paddingBottom: 10, marginLeft: 280 }
});
