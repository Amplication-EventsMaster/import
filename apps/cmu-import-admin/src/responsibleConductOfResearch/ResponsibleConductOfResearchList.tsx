import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ResponsibleConductOfResearchList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ResponsibleConductOfResearches"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Completion Date" source="completionDate" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Student Id" source="studentId" />
      </Datagrid>
    </List>
  );
};
