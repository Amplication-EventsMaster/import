import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const ResponsibleConductOfResearchCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Completion Date" source="completionDate" />
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="Student Id" source="studentId" />
      </SimpleForm>
    </Create>
  );
};
