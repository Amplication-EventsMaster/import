import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { STUDENTDATUM_TITLE_FIELD } from "../studentDatum/StudentDatumTitle";

export const GeneralDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Date" source="date" />
        <TextField label="Date2" source="date2" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Student Data"
          source="studentdatum.id"
          reference="StudentDatum"
        >
          <TextField source={STUDENTDATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Text" source="text" />
        <TextField label="Val" source="val" />
        <TextField label="Val2" source="val2" />
      </SimpleShowLayout>
    </Show>
  );
};
