import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReviewPeriodReferenceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Ref Abbrev" source="refAbbrev" />
        <NumberInput step={1} label="Ref Day" source="refDay" />
        <NumberInput step={1} label="Ref Month" source="refMonth" />
        <TextInput label="Ref Name" source="refName" />
      </SimpleForm>
    </Create>
  );
};
