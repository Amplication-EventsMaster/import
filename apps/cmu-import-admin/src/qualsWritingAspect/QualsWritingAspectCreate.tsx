import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { QualsWritingTitle } from "../qualsWriting/QualsWritingTitle";

export const QualsWritingAspectCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
