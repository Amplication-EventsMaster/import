/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ContactInformation } from "./ContactInformation";
import { ContactInformationCountArgs } from "./ContactInformationCountArgs";
import { ContactInformationFindManyArgs } from "./ContactInformationFindManyArgs";
import { ContactInformationFindUniqueArgs } from "./ContactInformationFindUniqueArgs";
import { CreateContactInformationArgs } from "./CreateContactInformationArgs";
import { UpdateContactInformationArgs } from "./UpdateContactInformationArgs";
import { DeleteContactInformationArgs } from "./DeleteContactInformationArgs";
import { ContactInformationService } from "../contactInformation.service";
@graphql.Resolver(() => ContactInformation)
export class ContactInformationResolverBase {
  constructor(protected readonly service: ContactInformationService) {}

  async _contactInformationsMeta(
    @graphql.Args() args: ContactInformationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ContactInformation])
  async contactInformations(
    @graphql.Args() args: ContactInformationFindManyArgs
  ): Promise<ContactInformation[]> {
    return this.service.contactInformations(args);
  }

  @graphql.Query(() => ContactInformation, { nullable: true })
  async contactInformation(
    @graphql.Args() args: ContactInformationFindUniqueArgs
  ): Promise<ContactInformation | null> {
    const result = await this.service.contactInformation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ContactInformation)
  async createContactInformation(
    @graphql.Args() args: CreateContactInformationArgs
  ): Promise<ContactInformation> {
    return await this.service.createContactInformation({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ContactInformation)
  async updateContactInformation(
    @graphql.Args() args: UpdateContactInformationArgs
  ): Promise<ContactInformation | null> {
    try {
      return await this.service.updateContactInformation({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ContactInformation)
  async deleteContactInformation(
    @graphql.Args() args: DeleteContactInformationArgs
  ): Promise<ContactInformation | null> {
    try {
      return await this.service.deleteContactInformation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
