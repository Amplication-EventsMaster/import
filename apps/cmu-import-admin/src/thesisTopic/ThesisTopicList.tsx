import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STUDENTDATUM_TITLE_FIELD } from "../studentDatum/StudentDatumTitle";

export const ThesisTopicList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ThesisTopics"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Date" source="date" />
        <BooleanField label="Defense Complete" source="defenseComplete" />
        <TextField label="Defense Date" source="defenseDate" />
        <BooleanField label="Defense Pending" source="defensePending" />
        <TextField label="Defense Title" source="defenseTitle" />
        <TextField label="ID" source="id" />
        <BooleanField label="Pending" source="pending" />
        <BooleanField label="Proposal Complete" source="proposalComplete" />
        <ReferenceField
          label="Student Data"
          source="studentdatum.id"
          reference="StudentDatum"
        >
          <TextField source={STUDENTDATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
      </Datagrid>
    </List>
  );
};
