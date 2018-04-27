import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlightGroup } from './components';
import styles from '../../common/style';
import { ICON_COLOR } from '../../common';

// TODO deep link to passbook for airline ticket?
// hover over airline abreviations to show location

export default class Travel extends Component {
  render() {
    const { data } = this.props;
    return (
      <ScrollView style={styles.container}>
        {data.flights && <FlightGroup flights={data.flights} />}
        <Icon style={styles.icon} name="train" size={30} color={ICON_COLOR} />
        <Icon style={styles.icon} name="car" size={30} color={ICON_COLOR} />
      </ScrollView>
    );
  }
}
