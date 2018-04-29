import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { ListItem, Card, colors } from 'react-native-elements';
import { DayCard, Unscheduled } from './components';

export default class Agenda extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <ScrollView style={styles.container}>
        <Unscheduled />
        <DayCard data={this.props.data} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8F9'
  }
});
