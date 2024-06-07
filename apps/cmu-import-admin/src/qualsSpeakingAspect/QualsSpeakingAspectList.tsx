import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QUALSSPEAKING_TITLE_FIELD } from "../qualsSpeaking/QualsSpeakingTitle";

export const QualsSpeakingAspectList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QualsSpeakingAspects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Quals Speaking"
          source="qualsspeaking.id"
          reference="QualsSpeaking"
        >
          <TextField source={QUALSSPEAKING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Text" source="text" />
        <TextField label="Type" source="type" />
      </Datagrid>
    </List>
  );
};
