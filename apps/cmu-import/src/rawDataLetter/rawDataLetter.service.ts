import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RawDataLetterServiceBase } from "./base/rawDataLetter.service.base";

@Injectable()
export class RawDataLetterService extends RawDataLetterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
