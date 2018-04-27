import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ICON_COLOR, SECONDARY_COLOR } from '../../../common';
import _styles from '../../../common/style';

const FlightGroup = ({ flights }) => {
  return flights.map((data, i) => (
    <View key={i}>
      <View style={styles.sideBySide}>
        <Icon style={_styles.icon} name="plane" size={30} color={ICON_COLOR} />
        <View>
          <Text style={styles.mainText}>{`${data.airline}`}</Text>
          <Text style={styles.subtext}>{`${data.confirmation}`}</Text>
        </View>
      </View>

      <View style={styles.textSection}>
        <View style={styles.textGroup}>
          <View style={styles.sideBySide}>
            <Text style={[styles.mainText, styles.mainTextCol1]}>Depart</Text>
            <Text style={styles.mainText}>{data.departureTime}</Text>
          </View>
          <Text style={styles.subtext}>{data.airportFrom}</Text>
        </View>
      </View>

      <View style={styles.textSection}>
        <View style={styles.textGroup}>
          <View style={styles.sideBySide}>
            <Text style={[styles.mainText, styles.mainTextCol1]}>Arrive</Text>
            <Text style={styles.mainText}>{data.arrivalTime}</Text>
          </View>
          <Text style={styles.subtext}>{data.airportTo}</Text>
        </View>
      </View>
    </View>
  ));
};

export default FlightGroup;

const styles = StyleSheet.create({
  sideBySide: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  textSection: {
    paddingLeft: 16,
    paddingRight: 16
  },
  textGroup: {
    paddingBottom: 5
  },
  mainText: {
    fontWeight: '600'
  },
  mainTextCol1: {
    width: 55
  },
  subtext: {
    fontSize: 12,
    fontWeight: '600',
    color: SECONDARY_COLOR
  }
});
