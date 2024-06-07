import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplywebStudentMigrationDatumService } from "./applywebStudentMigrationDatum.service";
import { ApplywebStudentMigrationDatumControllerBase } from "./base/applywebStudentMigrationDatum.controller.base";

@swagger.ApiTags("applywebStudentMigrationData")
@common.Controller("applywebStudentMigrationData")
export class ApplywebStudentMigrationDatumController extends ApplywebStudentMigrationDatumControllerBase {
  constructor(
    protected readonly service: ApplywebStudentMigrationDatumService
  ) {
    super(service);
  }
}
