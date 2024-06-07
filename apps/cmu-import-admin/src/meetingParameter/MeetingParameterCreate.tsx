import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MeetingParameterCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Meeting Id" source="meetingId" />
        <TextInput label="Param" source="param" />
        <NumberInput step={1} label="Sort Order" source="sortOrder" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
