import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QUALSWRITING_TITLE_FIELD } from "../qualsWriting/QualsWritingTitle";

export const QualsWritingAspectList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QualsWritingAspects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Quals Writing"
          source="qualswriting.id"
          reference="QualsWriting"
        >
          <TextField source={QUALSWRITING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Text" source="text" />
        <TextField label="Type" source="type" />
      </Datagrid>
    </List>
  );
};
