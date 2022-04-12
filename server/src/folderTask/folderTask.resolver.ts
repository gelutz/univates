import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FolderTaskResolverBase } from "./base/folderTask.resolver.base";
import { FolderTask } from "./base/FolderTask";
import { FolderTaskService } from "./folderTask.service";

@graphql.Resolver(() => FolderTask)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FolderTaskResolver extends FolderTaskResolverBase {
  constructor(
    protected readonly service: FolderTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
