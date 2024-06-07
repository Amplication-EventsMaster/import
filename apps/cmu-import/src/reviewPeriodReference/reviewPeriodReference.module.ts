import { Module } from "@nestjs/common";
import { ReviewPeriodReferenceModuleBase } from "./base/reviewPeriodReference.module.base";
import { ReviewPeriodReferenceService } from "./reviewPeriodReference.service";
import { ReviewPeriodReferenceController } from "./reviewPeriodReference.controller";
import { ReviewPeriodReferenceResolver } from "./reviewPeriodReference.resolver";

@Module({
  imports: [ReviewPeriodReferenceModuleBase],
  controllers: [ReviewPeriodReferenceController],
  providers: [ReviewPeriodReferenceService, ReviewPeriodReferenceResolver],
  exports: [ReviewPeriodReferenceService],
})
export class ReviewPeriodReferenceModule {}
