import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Card, colors } from 'react-native-elements';
import EditableText from './EditableText';

const Activities = ({ events, day, setAgenda }) => {
  return events.map((event, i) => {
    return (
      <View key={i} style={{ padding: 10 }}>
        <EditableText
          key={i}
          text={event.activity}
          sendText={newAgenda => setAgenda(day, newAgenda, i)}
        />
      </View>
    );
  });
};

class DayCard extends React.Component {
  state = this.props.data.agenda; // agenda by date

  setAgenda = (day, agenda, i) => {
    this.setState(state => {
      let events = [...state[day]]; // keep previous events
      events[i] = { ...events[i] }; // get event we want to change
      events[i].activity = agenda; // set new agenda
      return { [day]: events };
    });
    // need to persist this change too
  };

  render() {
    const days = Object.keys(this.state);
    return days.map((day, i) => (
      <Card
        key={i}
        title={day}
        containerStyle={styles.cardStyle}
        dividerStyle={styles.cardDivider}
        titleStyle={styles.cardTitle}
      >
        <Activities
          events={this.state[day]}
          day={day}
          setAgenda={this.setAgenda}
        />
      </Card>
    ));
  }
}

export default DayCard;

const styles = StyleSheet.create({
  cardStyle: { padding: 0 },
  cardDivider: {
    marginBottom: 0,
    backgroundColor: colors.greyOutline
  },
  cardTitle: { marginTop: 15 }
});
