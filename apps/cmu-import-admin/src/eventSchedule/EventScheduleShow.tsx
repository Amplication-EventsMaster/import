import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const EventScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Always" source="always" />
        <TextField label="Canceled" source="canceled" />
        <TextField label="Department" source="department" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Event Type" source="eventType" />
        <TextField label="ID" source="id" />
        <TextField label="Start Date" source="startDate" />
      </SimpleShowLayout>
    </Show>
  );
};
