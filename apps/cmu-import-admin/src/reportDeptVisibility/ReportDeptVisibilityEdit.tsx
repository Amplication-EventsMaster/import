import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ReportTitle } from "../report/ReportTitle";

export const ReportDeptVisibilityEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <ReferenceInput source="reports.id" reference="Report" label="Reports">
          <SelectInput optionText={ReportTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Visible" source="visible" />
      </SimpleForm>
    </Edit>
  );
};
