import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { STUDENTDATUM_TITLE_FIELD } from "../studentDatum/StudentDatumTitle";

export const StudentInstituteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Degree" source="degree" />
        <TextField label="ID" source="id" />
        <TextField label="Institutes Abbr" source="institutesAbbr" />
        <TextField label="Institutes Id" source="institutesId" />
        <TextField label="Institutes Name" source="institutesName" />
        <TextField label="Institutes Text" source="institutesText" />
        <TextField label="Irank" source="irank" />
        <TextField label="Major" source="major" />
        <ReferenceField
          label="Student Data"
          source="studentdatum.id"
          reference="StudentDatum"
        >
          <TextField source={STUDENTDATUM_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
