import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MeetingParameterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MeetingParameters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Meeting Id" source="meetingId" />
        <TextField label="Param" source="param" />
        <TextField label="Sort Order" source="sortOrder" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};
