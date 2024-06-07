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

export const ProjectTopicList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProjectTopics"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Area" source="area" />
        <TextField label="Client Name" source="clientName" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <ReferenceField
          label="Student Data"
          source="studentdatum.id"
          reference="StudentDatum"
        >
          <TextField source={STUDENTDATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Team Name" source="teamName" />
        <TextField label="Title" source="title" />
      </Datagrid>
    </List>
  );
};
