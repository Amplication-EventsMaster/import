import * as graphql from "@nestjs/graphql";
import { DepartmentSignatureResolverBase } from "./base/departmentSignature.resolver.base";
import { DepartmentSignature } from "./base/DepartmentSignature";
import { DepartmentSignatureService } from "./departmentSignature.service";

@graphql.Resolver(() => DepartmentSignature)
export class DepartmentSignatureResolver extends DepartmentSignatureResolverBase {
  constructor(protected readonly service: DepartmentSignatureService) {
    super(service);
  }
}
