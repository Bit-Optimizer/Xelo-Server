import { Field, InputType, ObjectType, Query, Resolver } from 'type-graphql';
import { Address } from './user';

enum Status{
    SOLD = "SOLD",
    UNSOLD = "UNSOLD"
}

@ObjectType()
export class Spec{
    @Field()
    key : string;

    @Field()
    value : string;
}

ObjectType()
export class Product {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  brand: string;

  @Field()
  category: string;

  @Field()
  subcategory: string;

  @Field()
  address: Address;

  @Field()
  seller: string;

  @Field()
  price: number;

  @Field()
  status : Status;

  @Field()
  spec : [Spec];

  @Field()
  photourl : [String];

  @Field()
  likes : [String];
}

@InputType()
class CreateProductInput{
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  brand: string;

  @Field()
  category: string;

  @Field()
  subcategory: string;

  @Field()
  address: Address;

  @Field()
  seller: string;

  @Field()
  price: number;

  @Field()
  status : Status;

  @Field()
  spec : [Spec];

  @Field()
  photourl : [String];

}

@InputType()
class UpdateProductInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  brand: string;

  @Field()
  category: string;

  @Field()
  subcategory: string;

  @Field()
  address: Address;

  @Field()
  price: number;

  @Field()
  status: Status;

  @Field()
  spec: [Spec];

  @Field()
  photourl: [String];
}

@InputType()
class DeleteProductInput{
    @Field()
    id : string;
}

@InputType()
class FilterInput {
  @Field()
  min_price: number;

  @Field()
  max_price: number;

  @Field()
  spec: [Spec];

  @Field()
  brand: string;

  @Field()
  category: string;

  @Field()
  subcategory: string;

  @Field()
  address: Address;
}

@InputType()
class SearchInput{
    @Field()
    val : string;
}

@InputType()
class Pagination{
    @Field()
    offset : number;

    @Field()
    limit : number;

    @Field()
    token : string;
}

@ObjectType()
export class Products{
    products : [Product];
}

// @Resolver()
// export class ContentClass {
//     @Query((returns) => Product)
//     createProduct
// }

