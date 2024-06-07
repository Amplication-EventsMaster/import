import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const EvaluatorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Faculty Id" source="facultyId" />
        <NumberInput step={1} label="Student Id" source="studentId" />
      </SimpleForm>
    </Edit>
  );
};
