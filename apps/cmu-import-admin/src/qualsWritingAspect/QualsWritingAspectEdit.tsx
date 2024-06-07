import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { QualsWritingTitle } from "../qualsWriting/QualsWritingTitle";

export const QualsWritingAspectEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="qualsWriting.id"
          reference="QualsWriting"
          label="Quals Writing"
        >
          <SelectInput optionText={QualsWritingTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "strength", value: "strength" },
            { label: "weakness", value: "weakness" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
