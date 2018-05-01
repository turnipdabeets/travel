import React from 'react';
import { StyleSheet, View, Text, Dimensions, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WHITE, GREEN } from '../../common';

class Lightbox extends React.Component {
  static getDeriverStateFromProps(nextProps, prevState) {
    // always set state to props.day
    return { value: nextProps.day };
  }
  state = {
    value: this.props.day
  };

  render() {
    const { value } = this.state;
    const {
      event: { activity = '' },
      days,
      dismiss
    } = this.props;
    const truncatedActivity =
      activity.length > 20 ? `${activity.substring(0, 20)}...` : activity;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{truncatedActivity}</Text>
          <Icon
            onPress={() => dismiss(value)}
            name="check"
            size={15}
            color={GREEN}
          />
        </View>
        <Picker
          selectedValue={value}
          style={styles.content}
          itemStyle={{ height: 100, fontSize: 16 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ value: itemValue })
          }
        >
          {days.map(day => <Picker.Item key={day} label={day} value={day} />)}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.3,
    backgroundColor: WHITE,
    borderRadius: 5,
    padding: 16
  },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  title: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center'
  },
  content: {
    marginTop: 12
  }
});

export default Lightbox;
