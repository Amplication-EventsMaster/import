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

export const ThesisCommitteeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Committee Role" source="committeeRole" />
        <TextField label="Faculty Id" source="facultyId" />
        <TextField label="ID" source="id" />
        <BooleanField label="Pending" source="pending" />
        <ReferenceField
          label="Student Data"
          source="studentdatum.id"
          reference="StudentDatum"
        >
          <TextField source={STUDENTDATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Thesis Type" source="thesisType" />
      </SimpleShowLayout>
    </Show>
  );
};
