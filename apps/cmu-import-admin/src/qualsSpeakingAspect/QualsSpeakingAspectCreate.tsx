import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { QualsSpeakingTitle } from "../qualsSpeaking/QualsSpeakingTitle";

export const QualsSpeakingAspectCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="qualsSpeaking.id"
          reference="QualsSpeaking"
          label="Quals Speaking"
        >
          <SelectInput optionText={QualsSpeakingTitle} />
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
