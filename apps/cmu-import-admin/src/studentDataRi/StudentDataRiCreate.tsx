import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const StudentDataRiCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Override Core" source="overrideCore" />
        <NumberInput step={1} label="Override Spec" source="overrideSpec" />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
