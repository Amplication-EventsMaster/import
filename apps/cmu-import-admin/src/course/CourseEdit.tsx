import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Course Num" source="courseNum" />
        <TextInput label="Course Section" source="courseSection" />
        <TextInput label="Department" source="department" />
        <TextInput label="Department Code" source="departmentCode" />
        <TextInput label="Short Title" source="shortTitle" />
        <TextInput label="Title" source="title" />
        <NumberInput step={1} label="Units" source="units" />
      </SimpleForm>
    </Edit>
  );
};
