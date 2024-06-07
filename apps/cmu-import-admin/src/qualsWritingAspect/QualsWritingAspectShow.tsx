import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { QUALSWRITING_TITLE_FIELD } from "../qualsWriting/QualsWritingTitle";

export const QualsWritingAspectShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Quals Writing"
          source="qualswriting.id"
          reference="QualsWriting"
        >
          <TextField source={QUALSWRITING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Text" source="text" />
        <TextField label="Type" source="type" />
      </SimpleShowLayout>
    </Show>
  );
};
