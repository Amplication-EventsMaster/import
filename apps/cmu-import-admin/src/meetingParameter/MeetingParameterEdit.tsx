import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MeetingParameterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Meeting Id" source="meetingId" />
        <TextInput label="Param" source="param" />
        <NumberInput step={1} label="Sort Order" source="sortOrder" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
