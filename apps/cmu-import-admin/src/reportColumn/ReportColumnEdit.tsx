import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ReportTitle } from "../report/ReportTitle";

export const ReportColumnEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Column Format" source="columnFormat" />
        <TextInput label="Column Name" source="columnName" />
        <NumberInput step={1} label="Column Sortable" source="columnSortable" />
        <TextInput label="Column Title" source="columnTitle" />
        <ReferenceInput source="reports.id" reference="Report" label="Reports">
          <SelectInput optionText={ReportTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Sort Order" source="sortOrder" />
      </SimpleForm>
    </Edit>
  );
};
