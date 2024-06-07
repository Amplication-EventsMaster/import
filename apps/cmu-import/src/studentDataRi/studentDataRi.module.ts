import { Module } from "@nestjs/common";
import { StudentDataRiModuleBase } from "./base/studentDataRi.module.base";
import { StudentDataRiService } from "./studentDataRi.service";
import { StudentDataRiController } from "./studentDataRi.controller";
import { StudentDataRiResolver } from "./studentDataRi.resolver";

@Module({
  imports: [StudentDataRiModuleBase],
  controllers: [StudentDataRiController],
  providers: [StudentDataRiService, StudentDataRiResolver],
  exports: [StudentDataRiService],
})
export class StudentDataRiModule {}
