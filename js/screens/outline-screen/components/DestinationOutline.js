import React from 'react';
import { ListItem, Card } from 'react-native-elements';
import styles from './style';

const outline = ['Travel', 'Accomodations', 'Agenda', 'Notes'];

const Outline = ({ pushOutlineType }) => {
  return outline.map((type, i) => (
    <ListItem
      key={i}
      title={type}
      underlayColor={'rgba(249, 249, 249, 0.8)'}
      onPress={() => pushOutlineType(type)}
    />
  ));
};

const DestinationOutline = ({ destination, pushOutlineType }) => {
  return (
    <Card
      title={destination}
      containerStyle={styles.cardStyle}
      dividerStyle={styles.cardDivider}
      titleStyle={styles.cardTitle}
    >
      <Outline pushOutlineType={pushOutlineType.bind(this, destination)} />
    </Card>
  );
};

export default DestinationOutline;
