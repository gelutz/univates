/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FolderTaskWhereInput } from "./FolderTaskWhereInput";
import { Type } from "class-transformer";
import { FolderTaskOrderByInput } from "./FolderTaskOrderByInput";

@ArgsType()
class FolderTaskFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FolderTaskWhereInput,
  })
  @Field(() => FolderTaskWhereInput, { nullable: true })
  @Type(() => FolderTaskWhereInput)
  where?: FolderTaskWhereInput;

  @ApiProperty({
    required: false,
    type: [FolderTaskOrderByInput],
  })
  @Field(() => [FolderTaskOrderByInput], { nullable: true })
  @Type(() => FolderTaskOrderByInput)
  orderBy?: Array<FolderTaskOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FolderTaskFindManyArgs };