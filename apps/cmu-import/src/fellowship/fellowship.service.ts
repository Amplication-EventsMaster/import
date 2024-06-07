import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FellowshipServiceBase } from "./base/fellowship.service.base";

@Injectable()
export class FellowshipService extends FellowshipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
