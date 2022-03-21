import { Module } from "@nestjs/common";
import { FolderModuleBase } from "./base/folder.module.base";
import { FolderService } from "./folder.service";
import { FolderController } from "./folder.controller";
import { FolderResolver } from "./folder.resolver";

@Module({
  imports: [FolderModuleBase],
  controllers: [FolderController],
  providers: [FolderService, FolderResolver],
  exports: [FolderService],
})
export class FolderModule {}
