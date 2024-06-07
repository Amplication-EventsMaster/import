import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EventScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Always" source="always" />
        <NumberInput step={1} label="Canceled" source="canceled" />
        <TextInput label="Department" source="department" />
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Event Type" source="eventType" />
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
