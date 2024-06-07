import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ContactInformationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address1" source="address1" />
        <TextField label="Address2" source="address2" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <TextField label="ID" source="id" />
        <TextField label="Phone" source="phone" />
        <TextField label="State" source="state" />
        <TextField label="Student Id" source="studentId" />
        <TextField label="Zip" source="zip" />
      </SimpleShowLayout>
    </Show>
  );
};
