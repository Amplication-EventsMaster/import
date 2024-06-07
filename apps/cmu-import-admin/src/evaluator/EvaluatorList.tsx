import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EvaluatorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Evaluators"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Faculty Id" source="facultyId" />
        <TextField label="ID" source="id" />
        <TextField label="Student Id" source="studentId" />
      </Datagrid>
    </List>
  );
};
