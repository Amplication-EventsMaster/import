import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { REPORT_TITLE_FIELD } from "./ReportTitle";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Report Query" source="reportQuery" />
        <TextField label="Report Title" source="reportTitle" />
        <ReferenceManyField
          reference="ReportColumn"
          target="report_id"
          label="ReportColumns"
        >
          <Datagrid rowClick="show">
            <TextField label="Column Format" source="columnFormat" />
            <TextField label="Column Name" source="columnName" />
            <TextField label="Column Sortable" source="columnSortable" />
            <TextField label="Column Title" source="columnTitle" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Reports"
              source="report.id"
              reference="Report"
            >
              <TextField source={REPORT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sort Order" source="sortOrder" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ReportDeptVisibility"
          target="report_id"
          label="ReportDeptVisibilities"
        >
          <Datagrid rowClick="show">
            <TextField label="Department" source="department" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Reports"
              source="report.id"
              reference="Report"
            >
              <TextField source={REPORT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Visible" source="visible" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
