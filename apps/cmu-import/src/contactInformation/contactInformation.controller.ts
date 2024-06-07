import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactInformationService } from "./contactInformation.service";
import { ContactInformationControllerBase } from "./base/contactInformation.controller.base";

@swagger.ApiTags("contactInformations")
@common.Controller("contactInformations")
export class ContactInformationController extends ContactInformationControllerBase {
  constructor(protected readonly service: ContactInformationService) {
    super(service);
  }
}
