import * as graphql from "@nestjs/graphql";
import { ContactInformationResolverBase } from "./base/contactInformation.resolver.base";
import { ContactInformation } from "./base/ContactInformation";
import { ContactInformationService } from "./contactInformation.service";

@graphql.Resolver(() => ContactInformation)
export class ContactInformationResolver extends ContactInformationResolverBase {
  constructor(protected readonly service: ContactInformationService) {
    super(service);
  }
}
