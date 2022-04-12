/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, FolderTask, Folder, Task } from "@prisma/client";

export class FolderTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FolderTaskFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderTaskFindManyArgs>
  ): Promise<number> {
    return this.prisma.folderTask.count(args);
  }

  async findMany<T extends Prisma.FolderTaskFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderTaskFindManyArgs>
  ): Promise<FolderTask[]> {
    return this.prisma.folderTask.findMany(args);
  }
  async findOne<T extends Prisma.FolderTaskFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderTaskFindUniqueArgs>
  ): Promise<FolderTask | null> {
    return this.prisma.folderTask.findUnique(args);
  }
  async create<T extends Prisma.FolderTaskCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderTaskCreateArgs>
  ): Promise<FolderTask> {
    return this.prisma.folderTask.create<T>(args);
  }
  async update<T extends Prisma.FolderTaskUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderTaskUpdateArgs>
  ): Promise<FolderTask> {
    return this.prisma.folderTask.update<T>(args);
  }
  async delete<T extends Prisma.FolderTaskDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderTaskDeleteArgs>
  ): Promise<FolderTask> {
    return this.prisma.folderTask.delete(args);
  }

  async findFolderId(
    parentId: string,
    args: Prisma.FolderFindManyArgs
  ): Promise<Folder[]> {
    return this.prisma.folderTask
      .findUnique({
        where: { id: parentId },
      })
      .folder_Id(args);
  }

  async findTaskId(
    parentId: string,
    args: Prisma.TaskFindManyArgs
  ): Promise<Task[]> {
    return this.prisma.folderTask
      .findUnique({
        where: { id: parentId },
      })
      .taskId(args);
  }
}