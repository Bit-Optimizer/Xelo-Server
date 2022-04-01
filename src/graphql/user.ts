import { ObjectType, Query, Resolver } from 'type-graphql';

@Resolver()
export class UserClass {
  @Query((returns) => User)
  getUser;
}
