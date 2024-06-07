import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SemesterReferenceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Optional" source="optional" />
        <TextInput label="Ref Abbrev" source="refAbbrev" />
        <NumberInput step={1} label="Ref Day" source="refDay" />
        <NumberInput step={1} label="Ref Month" source="refMonth" />
        <TextInput label="Ref Name" source="refName" />
        <NumberInput step={1} label="Rpref Id" source="rprefId" />
      </SimpleForm>
    </Create>
  );
};
