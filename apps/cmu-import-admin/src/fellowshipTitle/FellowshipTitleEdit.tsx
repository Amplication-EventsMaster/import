import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FellowshipTitleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Fellowship Title" source="fellowshipTitle" />
      </SimpleForm>
    </Edit>
  );
};
