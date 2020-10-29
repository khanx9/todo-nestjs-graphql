import { ObjectType, Field, Int, ID, DateScalarMode } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber, IsBoolean, MinLength, MaxLength, IsDate } from 'class-validator';

@ObjectType()
export class ItemType {
  @Field(() => ID )
  @IsString()
  readonly id?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(255)
  readonly name: string;

  @Field()
  @IsString()
  readonly description: string;

  @Field()
  @IsBoolean()
  readonly status: boolean;

  @Field(() => Date, {defaultValue : Date.now(),nullable : true})
  @IsDate()
  createdDate? : Date;

  @Field(() => Date, {defaultValue : Date.now(), nullable: true})
  @IsDate()
  changedDate? : Date;
}