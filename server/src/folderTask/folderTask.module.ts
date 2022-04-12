import { Module } from "@nestjs/common";
import { FolderTaskModuleBase } from "./base/folderTask.module.base";
import { FolderTaskService } from "./folderTask.service";
import { FolderTaskController } from "./folderTask.controller";
import { FolderTaskResolver } from "./folderTask.resolver";

@Module({
  imports: [FolderTaskModuleBase],
  controllers: [FolderTaskController],
  providers: [FolderTaskService, FolderTaskResolver],
  exports: [FolderTaskService],
})
export class FolderTaskModule {}
