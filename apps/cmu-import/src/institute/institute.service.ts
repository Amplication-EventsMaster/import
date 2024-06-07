import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstituteServiceBase } from "./base/institute.service.base";

@Injectable()
export class InstituteService extends InstituteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
