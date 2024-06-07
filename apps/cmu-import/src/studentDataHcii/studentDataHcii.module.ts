import { Module } from "@nestjs/common";
import { StudentDataHciiModuleBase } from "./base/studentDataHcii.module.base";
import { StudentDataHciiService } from "./studentDataHcii.service";
import { StudentDataHciiController } from "./studentDataHcii.controller";
import { StudentDataHciiResolver } from "./studentDataHcii.resolver";

@Module({
  imports: [StudentDataHciiModuleBase],
  controllers: [StudentDataHciiController],
  providers: [StudentDataHciiService, StudentDataHciiResolver],
  exports: [StudentDataHciiService],
})
export class StudentDataHciiModule {}
