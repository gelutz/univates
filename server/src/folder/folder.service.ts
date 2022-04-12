import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FolderServiceBase } from "./base/folder.service.base";

@Injectable()
export class FolderService extends FolderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
