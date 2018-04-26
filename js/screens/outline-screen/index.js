import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { DestinationOutline } from './components';

export default class Outline extends Component {
  pushOutlineType = (destination, title) => {
    this.props.navigator.push({
      screen: `travel.outline.${title}`,
      title,
      passProps: {
        title,
        destination
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DestinationOutline
          destination="Amsterdam"
          pushOutlineType={this.pushOutlineType}
        />
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
