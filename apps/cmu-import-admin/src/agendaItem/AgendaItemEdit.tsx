import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const AgendaItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Agenda Id" source="agendaId" />
        <NumberInput step={1} label="Meeting Id" source="meetingId" />
        <NumberInput step={1} label="Order" source="order" />
      </SimpleForm>
    </Edit>
  );
};
