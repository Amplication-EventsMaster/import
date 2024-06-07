import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const AgendaItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Agenda Id" source="agendaId" />
        <NumberInput step={1} label="Meeting Id" source="meetingId" />
        <NumberInput step={1} label="Order" source="order" />
      </SimpleForm>
    </Create>
  );
};
