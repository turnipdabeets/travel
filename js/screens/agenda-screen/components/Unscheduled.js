import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ListItem, Card, colors } from 'react-native-elements';

const Unscheduled = () => (
  <Card
    title={'Unscheduled Activities'}
    containerStyle={styles.cardStyle}
    dividerStyle={styles.cardDivider}
    titleStyle={styles.cardTitle}
  >
    <ListItem title={''} />
  </Card>
);

export default Unscheduled;

const styles = StyleSheet.create({
  cardStyle: { padding: 0 },
  cardDivider: {
    marginBottom: 0,
    backgroundColor: colors.greyOutline
  },
  cardTitle: { marginTop: 15 }
});
