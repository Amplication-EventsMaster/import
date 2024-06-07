import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STUDENTDATUM_TITLE_FIELD } from "../studentDatum/StudentDatumTitle";

export const StudentPubList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudentPubs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Authors" source="authors" />
        <TextField label="Citation" source="citation" />
        <TextField label="Forum" source="forum" />
        <TextField label="ID" source="id" />
        <TextField label="Pub Date" source="pubDate" />
        <TextField label="Sf Id" source="sfId" />
        <TextField label="Status" source="status" />
        <ReferenceField
          label="Student Data"
          source="studentdatum.id"
          reference="StudentDatum"
        >
          <TextField source={STUDENTDATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <TextField label="Url" source="url" />
      </Datagrid>
    </List>
  );
};
