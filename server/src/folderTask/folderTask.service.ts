import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FolderTaskServiceBase } from "./base/folderTask.service.base";

@Injectable()
export class FolderTaskService extends FolderTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
