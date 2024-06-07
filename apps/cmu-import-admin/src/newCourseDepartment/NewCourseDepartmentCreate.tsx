import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const NewCourseDepartmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Course Id" source="courseId" />
        <TextInput label="Requirement Type" source="requirementType" />
      </SimpleForm>
    </Create>
  );
};
