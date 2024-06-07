import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ScheduledMeetingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Agenda Id" source="agendaId" />
        <BooleanInput label="Always Visible" source="alwaysVisible" />
        <TextInput label="Department" source="department" />
        <DateTimeInput label="End Date" source="endDate" />
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
