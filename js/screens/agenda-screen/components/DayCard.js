import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ListItem, Card, colors } from 'react-native-elements';
import EditableText from './EditableText';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ICON_COLOR } from '../../../common';
import _styles from '../../../common/style';
const { width } = Dimensions.get('window');

const ActivityRow = ({ events, day, setActivity }) => {
  return events.map((event, i) => {
    return (
      <View key={i} style={styles.activityRow}>
        <EditableText
          key={i}
          text={event.activity}
          style={styles.activityRowText}
          sendText={activity => setActivity(day, activity, i)}
        />
      </View>
    );
  });
};

const Title = ({ day, onPress }) => (
  <View>
    <Text style={styles.title}>{day}</Text>
    <View style={styles.titleIcon}>
      <Icon
        onPress={onPress}
        style={_styles.icon}
        name="plus"
        size={15}
        color={ICON_COLOR}
      />
    </View>
  </View>
);

class DayCard extends React.Component {
  state = this.props.data.agenda; // agenda by date

  setActivity = (day, activity, idx) => {
    this.setState(state => {
      let events = [...state[day]]; // keep previous events
      events[idx] = { ...events[idx] }; // get event we want to change
      events[idx].activity = activity; // set new agenda
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
        title={<Title day={day} onPress={() => this.addEmptyEvent(day)} />}
        containerStyle={_styles.cardStyle}
        dividerStyle={_styles.cardDivider}
        titleStyle={_styles.cardTitle}
      >
        <ActivityRow
          events={this.state[day]}
          day={day}
          setActivity={this.setActivity}
        />
      </Card>
    ));
  }
}

export default DayCard;

const styles = StyleSheet.create({
  activityRow: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: colors.greyOutline
  },
  activityRowText: { fontSize: 12 },
  title: {
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 15
  },
  titleIcon: { position: 'absolute', top: 0, left: width - 75 }
});
