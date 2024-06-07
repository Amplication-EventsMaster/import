import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ApplywebStudentMigrationDatumShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="App Id" source="appId" />
        <TextField label="Applyweb Db" source="applywebDb" />
        <TextField label="Applyweb Db User Id" source="applywebDbUserId" />
        <TextField
          label="Applyweb Db User Table"
          source="applywebDbUserTable"
        />
        <TextField label="ID" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
