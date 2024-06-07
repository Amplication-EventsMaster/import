import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { QualsSpeakingTitle } from "../qualsSpeaking/QualsSpeakingTitle";

export const QualsSpeakingAspectEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
