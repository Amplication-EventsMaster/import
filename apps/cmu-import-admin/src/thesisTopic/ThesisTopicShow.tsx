import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { STUDENTDATUM_TITLE_FIELD } from "../studentDatum/StudentDatumTitle";

export const ThesisTopicShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
