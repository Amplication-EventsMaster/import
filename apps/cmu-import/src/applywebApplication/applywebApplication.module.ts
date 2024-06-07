import { Module } from "@nestjs/common";
import { ApplywebApplicationModuleBase } from "./base/applywebApplication.module.base";
import { ApplywebApplicationService } from "./applywebApplication.service";
import { ApplywebApplicationController } from "./applywebApplication.controller";
import { ApplywebApplicationResolver } from "./applywebApplication.resolver";

@Module({
  imports: [ApplywebApplicationModuleBase],
  controllers: [ApplywebApplicationController],
  providers: [ApplywebApplicationService, ApplywebApplicationResolver],
  exports: [ApplywebApplicationService],
})
export class ApplywebApplicationModule {}
