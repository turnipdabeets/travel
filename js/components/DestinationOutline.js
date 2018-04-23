import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Card, colors } from 'react-native-elements';

const outline = ['Travel', 'Accomodations', 'Agenda', 'Notes'];

const Outline = () =>
  outline.map((d, i) => (
    <ListItem
      key={i}
      title={d}
      underlayColor={'rgba(249, 249, 249, 0.8)'}
      onPress={() => alert('pressed!')}
    />
  ));

const DestinationOutline = ({ title }) => (
  <Card
    title={title}
    containerStyle={styles.cardStyle}
    dividerStyle={styles.cardDivider}
    titleStyle={styles.cardTitle}
  >
    <Outline />
  </Card>
);

export default DestinationOutline;

const styles = StyleSheet.create({
  cardStyle: { padding: 0 },
  cardDivider: {
    marginBottom: 0,
    backgroundColor: colors.greyOutline
  },
  cardTitle: { marginTop: 15 }
});
