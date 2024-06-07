import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InstitutionsConsolCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Code" source="code" />
        <TextInput label="Country" source="country" />
        <TextInput label="Country Code" source="countryCode" />
        <TextInput label="Institution" source="institution" />
        <TextInput label="Institution Abbr" source="institutionAbbr" />
        <TextInput label="Institution Ascii" source="institutionAscii" />
        <TextInput label="State" source="state" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
