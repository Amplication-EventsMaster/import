import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlackfridayApplywebApplicationServiceBase } from "./base/blackfridayApplywebApplication.service.base";

@Injectable()
export class BlackfridayApplywebApplicationService extends BlackfridayApplywebApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
