import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AgendaItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AgendaItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Agenda Id" source="agendaId" />
        <TextField label="ID" source="id" />
        <TextField label="Meeting Id" source="meetingId" />
        <TextField label="Order" source="order" />
      </Datagrid>
    </List>
  );
};
