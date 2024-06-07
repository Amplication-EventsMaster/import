import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ContactInformationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address1" source="address1" />
        <TextInput label="Address2" source="address2" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="State" source="state" />
        <NumberInput step={1} label="Student Id" source="studentId" />
        <TextInput label="Zip" source="zip" />
      </SimpleForm>
    </Edit>
  );
};
