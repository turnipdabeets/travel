import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-swipeable';
import { EditableText } from '../components';
import { ICON_COLOR, WHITE, BUTTONSIZE, GREEN } from '../../../common';
import _styles from '../../../common/style';

const LeftContent = () => (
  <View style={styles.leftContent}>
    <Icon style={styles.swipeButtonLeft} name="check" size={15} color={WHITE} />
  </View>
);

const DeleteButton = ({ deleteActivity, day, idx }) => (
  <View style={styles.rightButton}>
    <Icon
      onPress={() => deleteActivity(day, idx)}
      style={styles.swipeButtonRight}
      name="trash"
      size={15}
      color={WHITE}
    />
  </View>
);

const ActivityBody = ({ event, day, idx, changeActivity }) => (
  <View style={styles.activityWrapper}>
    <View style={styles.activityRow}>
      <Icon
        style={styles.activityIcon}
        name={event.completed ? 'check' : 'bell-o'}
        size={15}
        color={'grey'}
      />
      <View style={styles.activityText}>
        <EditableText
          text={event.activity}
          style={styles.activityRowText}
          sendText={activity => changeActivity(day, activity, idx)}
        />
      </View>
    </View>
  </View>
);

const ActivityRow = ({
  day,
  events,
  changeActivity,
  deleteActivity,
  toggleActivityComplete
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
            <DeleteButton deleteActivity={deleteActivity} day={day} idx={i} />
          ]}
        >
          <ActivityBody
            event={event}
            day={day}
            idx={i}
            changeActivity={changeActivity}
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
  rightButton: { backgroundColor: ICON_COLOR }
});
