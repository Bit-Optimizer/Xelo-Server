import {
  Args,
  Ctx,
  Field,
  Float,
  InputType,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import 'reflect-metadata';
import { ContextType } from './setup';
@ObjectType()
export class Address {
  @Field()
  country: string;

  @Field()
  division: string;

  @Field()
  city: string;

  @Field()
  lane: string;

  @Field()
  pin: string;
}
ObjectType();
export class User {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  profile: string;

  @Field()
  address: Address;

  @Field((type) => Float)
  rating?: number;

  @Field({ nullable: true })
  ratecount?: number;

  @Field((type) => [String])
  wishlist: [String];
}

@InputType()
class RegisterUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  address: Address;

  @Field()
  profile: string;
}

@InputType()
class UpdateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  address: Address;
}

@Resolver()
export class UserClass {
  @Query((returns) => User)
  async getUser(@Ctx() { req, userClient }: ContextType): Promise<User> {
    const res;
    return new User();
  }
}
