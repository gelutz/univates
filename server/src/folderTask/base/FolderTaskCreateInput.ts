/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FolderCreateNestedManyWithoutFolderTasksInput } from "./FolderCreateNestedManyWithoutFolderTasksInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { TaskCreateNestedManyWithoutFolderTasksInput } from "./TaskCreateNestedManyWithoutFolderTasksInput";
@InputType()
class FolderTaskCreateInput {
  @ApiProperty({
    required: true,
    type: () => FolderCreateNestedManyWithoutFolderTasksInput,
  })
  @ValidateNested()
  @Type(() => FolderCreateNestedManyWithoutFolderTasksInput)
  @IsOptional()
  @Field(() => FolderCreateNestedManyWithoutFolderTasksInput, {
    nullable: true,
  })
  folder_Id?: FolderCreateNestedManyWithoutFolderTasksInput;

  @ApiProperty({
    required: true,
    type: () => TaskCreateNestedManyWithoutFolderTasksInput,
  })
  @ValidateNested()
  @Type(() => TaskCreateNestedManyWithoutFolderTasksInput)
  @IsOptional()
  @Field(() => TaskCreateNestedManyWithoutFolderTasksInput, {
    nullable: true,
  })
  taskId?: TaskCreateNestedManyWithoutFolderTasksInput;
}
export { FolderTaskCreateInput };
