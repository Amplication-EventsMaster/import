import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReviewPeriodReferenceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReviewPeriodReferences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Ref Abbrev" source="refAbbrev" />
        <TextField label="Ref Day" source="refDay" />
        <TextField label="Ref Month" source="refMonth" />
        <TextField label="Ref Name" source="refName" />
      </Datagrid>
    </List>
  );
};
