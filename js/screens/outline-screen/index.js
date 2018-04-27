import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { DestinationOutline } from './components';
import styles from '../../common/style';
import data from '../../../data';

const locations = ['Amsterdam', 'Geneva', 'Vienna', 'Prague', 'Libson'];

export default class Outline extends Component {
  pushOutlineType = (destination, title) => {
    this.props.navigator.push({
      screen: `travel.outline.${title}`,
      title,
      subtitle: destination,
      passProps: {
        title,
        destination,
        data: data[destination]
      }
    });
  };

  render() {
    const locations = Object.keys(data);
    return (
      <ScrollView style={styles.container}>
        {locations.map((destination, i) => (
          <DestinationOutline
            key={i}
            destination={destination}
            pushOutlineType={this.pushOutlineType}
            data={data[destination]}
          />
        ))}
      </ScrollView>
    );
  }
}
