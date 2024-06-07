import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ReportTitle } from "../report/ReportTitle";

export const ReportDeptVisibilityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <ReferenceInput source="reports.id" reference="Report" label="Reports">
          <SelectInput optionText={ReportTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Visible" source="visible" />
      </SimpleForm>
    </Create>
  );
};
