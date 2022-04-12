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
import { TaskUpdateManyWithoutGroupsInput } from "./TaskUpdateManyWithoutGroupsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class GroupUpdateInput {
  @ApiProperty({
    required: false,
    type: () => TaskUpdateManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => TaskUpdateManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => TaskUpdateManyWithoutGroupsInput, {
    nullable: true,
  })
  tasks?: TaskUpdateManyWithoutGroupsInput;
}
export { GroupUpdateInput };