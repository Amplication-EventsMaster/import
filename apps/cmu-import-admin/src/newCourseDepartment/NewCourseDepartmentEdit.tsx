import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const NewCourseDepartmentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Course Id" source="courseId" />
        <TextInput label="Requirement Type" source="requirementType" />
      </SimpleForm>
    </Edit>
  );
};
