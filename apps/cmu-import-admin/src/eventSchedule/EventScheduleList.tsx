import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EventScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EventSchedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Always" source="always" />
        <TextField label="Canceled" source="canceled" />
        <TextField label="Department" source="department" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Event Type" source="eventType" />
        <TextField label="ID" source="id" />
        <TextField label="Start Date" source="startDate" />
      </Datagrid>
    </List>
  );
};
