// package: protos
// file: content.proto

import * as jspb from "google-protobuf";
import * as utils_pb from "./utils_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Spec extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spec.AsObject;
  static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spec;
  static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
}

export namespace Spec {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class Product extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getBrand(): string;
  setBrand(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getSubcategory(): string;
  setSubcategory(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): utils_pb.Address | undefined;
  setAddress(value?: utils_pb.Address): void;

  getSeller(): string;
  setSeller(value: string): void;

  getStatus(): Product.StatusMap[keyof Product.StatusMap];
  setStatus(value: Product.StatusMap[keyof Product.StatusMap]): void;

  hasUploaddate(): boolean;
  clearUploaddate(): void;
  getUploaddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUploaddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearSpecList(): void;
  getSpecList(): Array<Spec>;
  setSpecList(value: Array<Spec>): void;
  addSpec(value?: Spec, index?: number): Spec;

  clearPhotourlList(): void;
  getPhotourlList(): Array<string>;
  setPhotourlList(value: Array<string>): void;
  addPhotourl(value: string, index?: number): string;

  hasMfdate(): boolean;
  clearMfdate(): void;
  getMfdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMfdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearLikesList(): void;
  getLikesList(): Array<string>;
  setLikesList(value: Array<string>): void;
  addLikes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    id: string,
    price: number,
    name: string,
    description: string,
    brand: string,
    category: string,
    subcategory: string,
    address?: utils_pb.Address.AsObject,
    seller: string,
    status: Product.StatusMap[keyof Product.StatusMap],
    uploaddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    specList: Array<Spec.AsObject>,
    photourlList: Array<string>,
    mfdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    likesList: Array<string>,
  }

  export interface StatusMap {
    SOLD: 0;
    UNSOLD: 1;
  }

  export const Status: StatusMap;
}

export class CreateProductRequest extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): utils_pb.Address | undefined;
  setAddress(value?: utils_pb.Address): void;

  getSeller(): string;
  setSeller(value: string): void;

  clearSpecList(): void;
  getSpecList(): Array<Spec>;
  setSpecList(value: Array<Spec>): void;
  addSpec(value?: Spec, index?: number): Spec;

  clearPhotourlList(): void;
  getPhotourlList(): Array<string>;
  setPhotourlList(value: Array<string>): void;
  addPhotourl(value: string, index?: number): string;

  hasMfdate(): boolean;
  clearMfdate(): void;
  getMfdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMfdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBrand(): string;
  setBrand(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getSubcategory(): string;
  setSubcategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductRequest): CreateProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductRequest;
  static deserializeBinaryFromReader(message: CreateProductRequest, reader: jspb.BinaryReader): CreateProductRequest;
}

export namespace CreateProductRequest {
  export type AsObject = {
    price: number,
    name: string,
    description: string,
    address?: utils_pb.Address.AsObject,
    seller: string,
    specList: Array<Spec.AsObject>,
    photourlList: Array<string>,
    mfdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    brand: string,
    category: string,
    subcategory: string,
  }
}

export class UpdateProductRequest extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): utils_pb.Address | undefined;
  setAddress(value?: utils_pb.Address): void;

  getStatus(): UpdateProductRequest.StatusMap[keyof UpdateProductRequest.StatusMap];
  setStatus(value: UpdateProductRequest.StatusMap[keyof UpdateProductRequest.StatusMap]): void;

  clearSpecList(): void;
  getSpecList(): Array<Spec>;
  setSpecList(value: Array<Spec>): void;
  addSpec(value?: Spec, index?: number): Spec;

  clearPhotourlList(): void;
  getPhotourlList(): Array<string>;
  setPhotourlList(value: Array<string>): void;
  addPhotourl(value: string, index?: number): string;

  hasMfdate(): boolean;
  clearMfdate(): void;
  getMfdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMfdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBrand(): string;
  setBrand(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getSubcategory(): string;
  setSubcategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductRequest): UpdateProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductRequest;
  static deserializeBinaryFromReader(message: UpdateProductRequest, reader: jspb.BinaryReader): UpdateProductRequest;
}

export namespace UpdateProductRequest {
  export type AsObject = {
    price: number,
    name: string,
    description: string,
    address?: utils_pb.Address.AsObject,
    status: UpdateProductRequest.StatusMap[keyof UpdateProductRequest.StatusMap],
    specList: Array<Spec.AsObject>,
    photourlList: Array<string>,
    mfdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    brand: string,
    category: string,
    subcategory: string,
  }

  export interface StatusMap {
    SOLD: 0;
    UNSOLD: 1;
  }

  export const Status: StatusMap;
}

export class DeleteProductRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProductRequest): DeleteProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProductRequest;
  static deserializeBinaryFromReader(message: DeleteProductRequest, reader: jspb.BinaryReader): DeleteProductRequest;
}

export namespace DeleteProductRequest {
  export type AsObject = {
    id: string,
  }
}

export class Products extends jspb.Message {
  clearProductList(): void;
  getProductList(): Array<Product>;
  setProductList(value: Array<Product>): void;
  addProduct(value?: Product, index?: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Products.AsObject;
  static toObject(includeInstance: boolean, msg: Products): Products.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Products, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Products;
  static deserializeBinaryFromReader(message: Products, reader: jspb.BinaryReader): Products;
}

export namespace Products {
  export type AsObject = {
    productList: Array<Product.AsObject>,
  }
}

export class FilterRequest extends jspb.Message {
  clearSpecList(): void;
  getSpecList(): Array<Spec>;
  setSpecList(value: Array<Spec>): void;
  addSpec(value?: Spec, index?: number): Spec;

  getMinPrice(): number;
  setMinPrice(value: number): void;

  getMaxPrice(): number;
  setMaxPrice(value: number): void;

  getCategory(): string;
  setCategory(value: string): void;

  getSubcategory(): string;
  setSubcategory(value: string): void;

  clearBrandList(): void;
  getBrandList(): Array<string>;
  setBrandList(value: Array<string>): void;
  addBrand(value: string, index?: number): string;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): utils_pb.Address | undefined;
  setAddress(value?: utils_pb.Address): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterRequest): FilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterRequest;
  static deserializeBinaryFromReader(message: FilterRequest, reader: jspb.BinaryReader): FilterRequest;
}

export namespace FilterRequest {
  export type AsObject = {
    specList: Array<Spec.AsObject>,
    minPrice: number,
    maxPrice: number,
    category: string,
    subcategory: string,
    brandList: Array<string>,
    address?: utils_pb.Address.AsObject,
  }
}

export class SearchRequest extends jspb.Message {
  getVal(): string;
  setVal(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    val: string,
  }
}

export class Pagination extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    offset: number,
    limit: number,
    token: string,
  }
}

