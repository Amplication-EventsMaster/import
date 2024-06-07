import { Module } from "@nestjs/common";
import { ContactInformationModuleBase } from "./base/contactInformation.module.base";
import { ContactInformationService } from "./contactInformation.service";
import { ContactInformationController } from "./contactInformation.controller";
import { ContactInformationResolver } from "./contactInformation.resolver";

@Module({
  imports: [ContactInformationModuleBase],
  controllers: [ContactInformationController],
  providers: [ContactInformationService, ContactInformationResolver],
  exports: [ContactInformationService],
})
export class ContactInformationModule {}
