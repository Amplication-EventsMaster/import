import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EventScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Always" source="always" />
        <NumberInput step={1} label="Canceled" source="canceled" />
        <TextInput label="Department" source="department" />
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Event Type" source="eventType" />
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
