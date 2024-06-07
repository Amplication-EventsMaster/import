import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const ResponsibleConductOfResearchEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Completion Date" source="completionDate" />
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="Student Id" source="studentId" />
      </SimpleForm>
    </Edit>
  );
};
