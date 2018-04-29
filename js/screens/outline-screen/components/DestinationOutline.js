import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Card, colors } from 'react-native-elements';
import _styles from '../../../common/style';

// TODO more sophisticated precentage model
const outline = ['Travel', 'Accomodations', 'Agenda', 'Notes'];

function getColor(value) {
  // value from 0 to 1
  var hue = (value * 120).toString(10);
  return ['hsl(', hue, ',100%,50%)'].join('');
}

const Outline = ({ pushOutlineType, percentagePlanned }) => {
  return outline.map((category, i) => {
    const subtitle = percentagePlanned[category];
    return (
      <ListItem
        key={i}
        title={category}
        titleStyle={styles.listTitle}
        bottomDivider={true}
        subtitle={`${subtitle}%`}
        subtitleStyle={[
          styles.listSubtitle,
          { color: getColor(subtitle / 100) }
        ]}
        underlayColor={'rgba(249, 249, 249, 0.8)'}
        onPress={() => pushOutlineType(category)}
      />
    );
  });
};

function getAgendaPercentage(agenda) {
  // calculate if at least one event in a day
  const days = Object.keys(agenda);
  const total = days.length;
  const completed = days.reduce((total, day) => {
    return agenda[day].length > 0 ? total + 1 : total;
  }, 0);
  return completed / total * 100;
}

const DestinationOutline = ({ destination, pushOutlineType, data }) => {
  return (
    <Card
      title={destination}
      titleNumberOfLines={2}
      containerStyle={_styles.cardStyle}
      dividerStyle={_styles.cardDivider}
      titleStyle={_styles.cardTitle}
    >
      <Outline
        pushOutlineType={pushOutlineType.bind(this, destination)}
        percentagePlanned={{
          Travel: data.flights.length >= 1 ? '100' : '0',
          Accomodations: data.accomodations.length >= 1 ? '100' : '0',
          Agenda: getAgendaPercentage(data.agenda),
          Notes: data.notes.length >= 1 ? '100' : '0'
        }}
      />
    </Card>
  );
};

export default DestinationOutline;

const styles = StyleSheet.create({
  listTitle: { fontSize: 12 },
  listSubtitle: { fontSize: 10 }
});
