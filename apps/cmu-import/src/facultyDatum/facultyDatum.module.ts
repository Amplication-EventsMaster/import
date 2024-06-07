import { Module } from "@nestjs/common";
import { FacultyDatumModuleBase } from "./base/facultyDatum.module.base";
import { FacultyDatumService } from "./facultyDatum.service";
import { FacultyDatumController } from "./facultyDatum.controller";
import { FacultyDatumResolver } from "./facultyDatum.resolver";

@Module({
  imports: [FacultyDatumModuleBase],
  controllers: [FacultyDatumController],
  providers: [FacultyDatumService, FacultyDatumResolver],
  exports: [FacultyDatumService],
})
export class FacultyDatumModule {}
