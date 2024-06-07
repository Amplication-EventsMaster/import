import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FellowshipTitleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Fellowship Title" source="fellowshipTitle" />
      </SimpleForm>
    </Create>
  );
};
