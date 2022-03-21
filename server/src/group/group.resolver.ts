import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GroupResolverBase } from "./base/group.resolver.base";
import { Group } from "./base/Group";
import { GroupService } from "./group.service";

@graphql.Resolver(() => Group)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GroupResolver extends GroupResolverBase {
  constructor(
    protected readonly service: GroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
