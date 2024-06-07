import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SemesterReferenceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SemesterReferences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Optional" source="optional" />
        <TextField label="Ref Abbrev" source="refAbbrev" />
        <TextField label="Ref Day" source="refDay" />
        <TextField label="Ref Month" source="refMonth" />
        <TextField label="Ref Name" source="refName" />
        <TextField label="Rpref Id" source="rprefId" />
      </Datagrid>
    </List>
  );
};
