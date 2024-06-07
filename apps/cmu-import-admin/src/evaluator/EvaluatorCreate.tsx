import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const EvaluatorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Faculty Id" source="facultyId" />
        <NumberInput step={1} label="Student Id" source="studentId" />
      </SimpleForm>
    </Create>
  );
};
