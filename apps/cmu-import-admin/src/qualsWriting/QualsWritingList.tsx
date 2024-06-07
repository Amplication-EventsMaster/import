import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QUALSCOMMITTEE_TITLE_FIELD } from "../qualsCommittee/QualsCommitteeTitle";

export const QualsWritingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QualsWritings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Engaging Reader" source="engaging_reader" />
        <TextField label="Engaging Reader Exp" source="engagingReaderExp" />
        <TextField label="ID" source="id" />
        <TextField label="Organization" source="organization" />
        <TextField label="Organization Exp" source="organizationExp" />
        <TextField label="Overall" source="overall" />
        <TextField label="Overall Exp" source="overallExp" />
        <ReferenceField
          label="Quals Committee"
          source="qualscommittee.id"
          reference="QualsCommittee"
        >
          <TextField source={QUALSCOMMITTEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <TextField label="Student Id" source="studentId" />
        <TextField label="Summary Audience" source="summaryAudience" />
        <TextField label="Summary Topic" source="summaryTopic" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Ur Id" source="urId" />
        <TextField label="Writing Style" source="writing_style" />
        <TextField label="Writing Style Exp" source="writingStyleExp" />
      </Datagrid>
    </List>
  );
};
