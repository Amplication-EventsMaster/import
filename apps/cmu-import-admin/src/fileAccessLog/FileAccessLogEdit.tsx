import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const FileAccessLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Faculty Id" source="facultyId" />
        <NumberInput step={1} label="Sf Id" source="sfId" />
        <DateTimeInput label="Time" source="time" />
      </SimpleForm>
    </Edit>
  );
};
