import { RawDatumWhereInput } from "./RawDatumWhereInput";
import { RawDatumOrderByInput } from "./RawDatumOrderByInput";

export type RawDatumFindManyArgs = {
  where?: RawDatumWhereInput;
  orderBy?: Array<RawDatumOrderByInput>;
  skip?: number;
  take?: number;
};
