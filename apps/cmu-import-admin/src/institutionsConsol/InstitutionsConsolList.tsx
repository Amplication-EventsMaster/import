import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InstitutionsConsolList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InstitutionsConsols"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="City" source="city" />
        <TextField label="Code" source="code" />
        <TextField label="Country" source="country" />
        <TextField label="Country Code" source="countryCode" />
        <TextField label="ID" source="id" />
        <TextField label="Institution" source="institution" />
        <TextField label="Institution Abbr" source="institutionAbbr" />
        <TextField label="Institution Ascii" source="institutionAscii" />
        <TextField label="State" source="state" />
        <TextField label="Url" source="url" />
      </Datagrid>
    </List>
  );
};
