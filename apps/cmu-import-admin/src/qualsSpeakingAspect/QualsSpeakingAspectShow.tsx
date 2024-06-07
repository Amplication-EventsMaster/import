import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { QUALSSPEAKING_TITLE_FIELD } from "../qualsSpeaking/QualsSpeakingTitle";

export const QualsSpeakingAspectShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Quals Speaking"
          source="qualsspeaking.id"
          reference="QualsSpeaking"
        >
          <TextField source={QUALSSPEAKING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Text" source="text" />
        <TextField label="Type" source="type" />
      </SimpleShowLayout>
    </Show>
  );
};
