import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { STUDENTDATUM_TITLE_FIELD } from "../studentDatum/StudentDatumTitle";

export const ProjectTopicShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
