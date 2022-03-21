import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FolderTaskService } from "./folderTask.service";
import { FolderTaskControllerBase } from "./base/folderTask.controller.base";

@swagger.ApiTags("folderTasks")
@common.Controller("folderTasks")
export class FolderTaskController extends FolderTaskControllerBase {
  constructor(
    protected readonly service: FolderTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
