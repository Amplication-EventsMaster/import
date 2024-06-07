import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReviewPeriodReferenceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Ref Abbrev" source="refAbbrev" />
        <NumberInput step={1} label="Ref Day" source="refDay" />
        <NumberInput step={1} label="Ref Month" source="refMonth" />
        <TextInput label="Ref Name" source="refName" />
      </SimpleForm>
    </Edit>
  );
};
