import { InputType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class ItemInput {

  @Field({nullable : true})
  @IsString()
  @MinLength(2)
  readonly name?: string;

  @Field({nullable : true})
  readonly description?: string;

  @Field({nullable : true})
  readonly status?: boolean;
}