import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactInformationServiceBase } from "./base/contactInformation.service.base";

@Injectable()
export class ContactInformationService extends ContactInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
