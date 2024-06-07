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

export const QualsResearchList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QualsResearches"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Approach" source="approach" />
        <TextField label="Approach Exp" source="approachExp" />
        <TextField label="ID" source="id" />
        <TextField label="Insight" source="insight" />
        <TextField label="Insight Exp" source="insightExp" />
        <TextField label="Interpretation" source="interpretation" />
        <TextField label="Interpretation Exp" source="interpretationExp" />
        <TextField label="Overall" source="overall" />
        <TextField label="Overall Exp" source="overallExp" />
        <TextField label="Progress" source="progress" />
        <ReferenceField
          label="Quals Committee"
          source="qualscommittee.id"
          reference="QualsCommittee"
        >
          <TextField source={QUALSCOMMITTEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <TextField label="Student Id" source="studentId" />
        <TextField label="Summary" source="summary" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Understanding" source="understanding" />
        <TextField label="Understanding Exp" source="understandingExp" />
        <TextField label="Ur Id" source="urId" />
      </Datagrid>
    </List>
  );
};
