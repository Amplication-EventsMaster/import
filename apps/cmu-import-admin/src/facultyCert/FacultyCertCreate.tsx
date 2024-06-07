import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const FacultyCertCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <DateTimeInput label="Cert Date" source="certDate" />
        <NumberInput step={1} label="Faculty Id" source="facultyId" />
        <NumberInput step={1} label="Ref Id" source="refId" />
      </SimpleForm>
    </Create>
  );
};
