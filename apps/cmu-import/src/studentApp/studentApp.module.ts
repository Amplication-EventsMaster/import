import { Module } from "@nestjs/common";
import { StudentAppModuleBase } from "./base/studentApp.module.base";
import { StudentAppService } from "./studentApp.service";
import { StudentAppController } from "./studentApp.controller";
import { StudentAppResolver } from "./studentApp.resolver";

@Module({
  imports: [StudentAppModuleBase],
  controllers: [StudentAppController],
  providers: [StudentAppService, StudentAppResolver],
  exports: [StudentAppService],
})
export class StudentAppModule {}
