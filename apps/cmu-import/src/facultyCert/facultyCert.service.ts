import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FacultyCertServiceBase } from "./base/facultyCert.service.base";

@Injectable()
export class FacultyCertService extends FacultyCertServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
