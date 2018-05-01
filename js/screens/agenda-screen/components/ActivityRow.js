import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-swipeable';
import { EditableText } from '../components';
import {
  ICON_COLOR,
  WHITE,
  BUTTONSIZE,
  GREEN,
  ORANGE,
  GREY
} from '../../../common';
import _styles from '../../../common/style';

const LeftContent = () => (
  <View style={styles.leftContent}>
    <Icon style={styles.swipeButtonLeft} name="check" size={15} color={WHITE} />
  </View>
);

const DeleteButton = ({ onPress }) => (
  <View style={styles.rightButton}>
    <Icon
      onPress={onPress}
      style={styles.swipeButtonRight}
      name="trash"
      size={15}
      color={WHITE}
    />
  </View>
);

const ChangeDay = ({ onPress }) => (
  <View style={styles.calendarButton}>
    <Icon
      onPress={onPress}
      style={styles.swipeButtonRight}
      name="calendar"
      size={15}
      color={WHITE}
    />
  </View>
);

const ActivityBody = ({ event, day, idx, editActivity }) => (
  <View style={styles.activityWrapper}>
    <View style={styles.activityRow}>
      <Icon
        style={styles.activityIcon}
        name={event.completed ? 'check' : 'bell-o'}
        size={15}
        color={GREY}
      />
      <View style={styles.activityText}>
        <EditableText
          text={event.activity}
          style={styles.activityRowText}
          sendText={activity => editActivity(day, activity, idx)}
        />
      </View>
    </View>
  </View>
);

const ActivityRow = ({
  day,
  events,
  editActivity,
  deleteActivity,
  toggleActivityComplete,
  reassignActivityDate
}) =>
  events.map((event, i) => {
    return (
      <View key={i}>
        <View style={_styles.divider} />
        <Swipeable
          leftContent={<LeftContent />}
          onLeftActionRelease={() => toggleActivityComplete(day, i)}
          rightButtonWidth={BUTTONSIZE}
          rightButtons={[
            <DeleteButton onPress={() => deleteActivity(day, i)} />,
            <ChangeDay
              onPress={() => reassignActivityDate(events, event, i, day)}
            />
          ]}
        >
          <ActivityBody
            event={event}
            day={day}
            idx={i}
            editActivity={editActivity}
          />
        </Swipeable>
      </View>
    );
  });

export default ActivityRow;

const styles = StyleSheet.create({
  activityWrapper: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  activityRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  activityRowText: { fontSize: 12 },
  activityIcon: { paddingRight: 10 },
  activityText: { width: '90%' },
  swipeButtonLeft: { paddingTop: 10, paddingBottom: 10, marginLeft: 280 },
  swipeButtonRight: { paddingTop: 10, paddingBottom: 10, marginLeft: 20 },
  leftContent: { backgroundColor: GREEN },
  rightButton: { backgroundColor: ICON_COLOR },
  calendarButton: { backgroundColor: ORANGE }
});
