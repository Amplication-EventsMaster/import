import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FellowshipTitleServiceBase } from "./base/fellowshipTitle.service.base";

@Injectable()
export class FellowshipTitleService extends FellowshipTitleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
