import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GreGeneralConvCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Current Scale" source="currentScale" />
        <NumberInput step={1} label="Prior Scale" source="priorScale" />
        <TextInput label="Subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};
