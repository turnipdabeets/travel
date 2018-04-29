import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tile } from 'react-native-elements';
import { GREEN, BUTTONSIZE } from '../../../common';
import _styles from '../../../common/style';

const { width } = Dimensions.get('window');

const Title = ({ title, onPress }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.titleIcon}>
      <Icon
        onPress={onPress}
        style={_styles.icon}
        name="plus"
        size={15}
        color={GREEN}
      />
    </View>
  </View>
);

export default Title;

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 15
  },
  titleIcon: { position: 'absolute', top: 0, left: width - BUTTONSIZE }
});
