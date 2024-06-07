import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { QUALSWRITING_TITLE_FIELD } from "./QualsWritingTitle";
import { QUALSCOMMITTEE_TITLE_FIELD } from "../qualsCommittee/QualsCommitteeTitle";

export const QualsWritingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="QualsWritingAspect"
          target="quals_writing_id"
          label="QualsWritingAspects"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
