import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ScheduledMeetingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ScheduledMeetings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Agenda Id" source="agendaId" />
        <BooleanField label="Always Visible" source="alwaysVisible" />
        <TextField label="Department" source="department" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Start Date" source="startDate" />
      </Datagrid>
    </List>
  );
};
