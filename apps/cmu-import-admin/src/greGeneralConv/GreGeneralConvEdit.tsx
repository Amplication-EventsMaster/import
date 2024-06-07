import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GreGeneralConvEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Current Scale" source="currentScale" />
        <NumberInput step={1} label="Prior Scale" source="priorScale" />
        <TextInput label="Subject" source="subject" />
      </SimpleForm>
    </Edit>
  );
};
