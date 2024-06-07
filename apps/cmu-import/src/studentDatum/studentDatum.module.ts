import { Module } from "@nestjs/common";
import { StudentDatumModuleBase } from "./base/studentDatum.module.base";
import { StudentDatumService } from "./studentDatum.service";
import { StudentDatumController } from "./studentDatum.controller";
import { StudentDatumResolver } from "./studentDatum.resolver";

@Module({
  imports: [StudentDatumModuleBase],
  controllers: [StudentDatumController],
  providers: [StudentDatumService, StudentDatumResolver],
  exports: [StudentDatumService],
})
export class StudentDatumModule {}
