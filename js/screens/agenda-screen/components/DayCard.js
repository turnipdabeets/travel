import React from 'react';
import { Card } from 'react-native-elements';
import { EditableText, Title, ActivityRow } from '../components';
import _styles from '../../../common/style';

const DayCard = ({
  editActivity,
  addActivity,
  deleteActivity,
  toggleActivityComplete,
  days,
  agenda
}) =>
  days.map((day, i) => (
    <Card
      key={i}
      title={<Title title={day} onPress={() => addActivity(day)} />}
      containerStyle={_styles.cardStyleEndToEnd}
      dividerStyle={_styles.cardDivider}
      titleStyle={_styles.cardTitle}
    >
      <ActivityRow
        events={agenda[day]}
        day={day}
        editActivity={editActivity}
        deleteActivity={deleteActivity}
        toggleActivityComplete={toggleActivityComplete}
      />
    </Card>
  ));

export default DayCard;
