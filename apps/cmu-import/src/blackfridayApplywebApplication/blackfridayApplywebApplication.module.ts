import { Module } from "@nestjs/common";
import { BlackfridayApplywebApplicationModuleBase } from "./base/blackfridayApplywebApplication.module.base";
import { BlackfridayApplywebApplicationService } from "./blackfridayApplywebApplication.service";
import { BlackfridayApplywebApplicationController } from "./blackfridayApplywebApplication.controller";
import { BlackfridayApplywebApplicationResolver } from "./blackfridayApplywebApplication.resolver";

@Module({
  imports: [BlackfridayApplywebApplicationModuleBase],
  controllers: [BlackfridayApplywebApplicationController],
  providers: [
    BlackfridayApplywebApplicationService,
    BlackfridayApplywebApplicationResolver,
  ],
  exports: [BlackfridayApplywebApplicationService],
})
export class BlackfridayApplywebApplicationModule {}
