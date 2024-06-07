import { Module } from "@nestjs/common";
import { StudentPubModuleBase } from "./base/studentPub.module.base";
import { StudentPubService } from "./studentPub.service";
import { StudentPubController } from "./studentPub.controller";
import { StudentPubResolver } from "./studentPub.resolver";

@Module({
  imports: [StudentPubModuleBase],
  controllers: [StudentPubController],
  providers: [StudentPubService, StudentPubResolver],
  exports: [StudentPubService],
})
export class StudentPubModule {}
