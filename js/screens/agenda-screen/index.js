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
  render() {
    console.log('this.props', this.props);
    return (
      <ScrollView style={styles.container}>
        <DayCard data={this.props.data} />
      </ScrollView>
    );
  }
}
