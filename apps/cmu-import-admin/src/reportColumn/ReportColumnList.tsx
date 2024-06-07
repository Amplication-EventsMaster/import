import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";

export const ReportColumnList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReportColumns"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Column Format" source="columnFormat" />
        <TextField label="Column Name" source="columnName" />
        <TextField label="Column Sortable" source="columnSortable" />
        <TextField label="Column Title" source="columnTitle" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Reports" source="report.id" reference="Report">
          <TextField source={REPORT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sort Order" source="sortOrder" />
      </Datagrid>
    </List>
  );
};
