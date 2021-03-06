/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateFolderArgs } from "./CreateFolderArgs";
import { UpdateFolderArgs } from "./UpdateFolderArgs";
import { DeleteFolderArgs } from "./DeleteFolderArgs";
import { FolderFindManyArgs } from "./FolderFindManyArgs";
import { FolderFindUniqueArgs } from "./FolderFindUniqueArgs";
import { Folder } from "./Folder";
import { FolderTask } from "../../folderTask/base/FolderTask";
import { FolderService } from "../folder.service";

@graphql.Resolver(() => Folder)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FolderResolverBase {
  constructor(
    protected readonly service: FolderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "read",
    possession: "any",
  })
  async _foldersMeta(
    @graphql.Args() args: FolderFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Folder])
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "read",
    possession: "any",
  })
  async folders(
    @graphql.Args() args: FolderFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Folder[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Folder",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Folder, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "read",
    possession: "own",
  })
  async folder(
    @graphql.Args() args: FolderFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Folder | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Folder",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Folder)
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "create",
    possession: "any",
  })
  async createFolder(
    @graphql.Args() args: CreateFolderArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Folder> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Folder",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Folder"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        folderTasks: args.data.folderTasks
          ? {
              connect: args.data.folderTasks,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Folder)
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "update",
    possession: "any",
  })
  async updateFolder(
    @graphql.Args() args: UpdateFolderArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Folder | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Folder",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Folder"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          folderTasks: args.data.folderTasks
            ? {
                connect: args.data.folderTasks,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Folder)
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "delete",
    possession: "any",
  })
  async deleteFolder(
    @graphql.Args() args: DeleteFolderArgs
  ): Promise<Folder | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => FolderTask, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "read",
    possession: "any",
  })
  async folderTasks(
    @graphql.Parent() parent: Folder,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<FolderTask | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "FolderTask",
    });
    const result = await this.service.getFolderTasks(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
