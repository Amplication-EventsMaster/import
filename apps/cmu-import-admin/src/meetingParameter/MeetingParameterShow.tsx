import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MeetingParameterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Meeting Id" source="meetingId" />
        <TextField label="Param" source="param" />
        <TextField label="Sort Order" source="sortOrder" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
