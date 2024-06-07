import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RawDataLetterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Intro Text" source="introText" />
        <TextInput label="Month" source="month" />
        <TextInput label="Name" source="name" />
        <TextInput label="Performance Code" source="performanceCode" />
        <TextInput label="Performance Code Text" source="performanceCodeText" />
        <TextInput label="Text" source="text" />
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Edit>
  );
};
