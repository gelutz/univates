import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FolderResolverBase } from "./base/folder.resolver.base";
import { Folder } from "./base/Folder";
import { FolderService } from "./folder.service";

@graphql.Resolver(() => Folder)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FolderResolver extends FolderResolverBase {
  constructor(
    protected readonly service: FolderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
