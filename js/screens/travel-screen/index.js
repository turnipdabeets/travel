import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Travel extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <Text>{this.props.destination}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8F9'
  }
});
