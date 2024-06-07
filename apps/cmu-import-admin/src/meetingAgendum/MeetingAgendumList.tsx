import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MeetingAgendumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MeetingAgenda"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Meeting Id" source="meetingId" />
        <TextField label="Present Order" source="presentOrder" />
        <TextField label="Student Id" source="studentId" />
      </Datagrid>
    </List>
  );
};
