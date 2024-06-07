import * as graphql from "@nestjs/graphql";
import { DepartmentSignatureImageResolverBase } from "./base/departmentSignatureImage.resolver.base";
import { DepartmentSignatureImage } from "./base/DepartmentSignatureImage";
import { DepartmentSignatureImageService } from "./departmentSignatureImage.service";

@graphql.Resolver(() => DepartmentSignatureImage)
export class DepartmentSignatureImageResolver extends DepartmentSignatureImageResolverBase {
  constructor(protected readonly service: DepartmentSignatureImageService) {
    super(service);
  }
}
