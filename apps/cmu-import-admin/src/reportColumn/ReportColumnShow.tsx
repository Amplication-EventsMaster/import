import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";

export const ReportColumnShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Column Format" source="columnFormat" />
        <TextField label="Column Name" source="columnName" />
        <TextField label="Column Sortable" source="columnSortable" />
        <TextField label="Column Title" source="columnTitle" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Reports" source="report.id" reference="Report">
          <TextField source={REPORT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sort Order" source="sortOrder" />
      </SimpleShowLayout>
    </Show>
  );
};
