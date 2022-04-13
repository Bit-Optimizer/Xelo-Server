// package: protos
// file: content.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as utils_pb from "./utils_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Spec extends jspb.Message { 
    getKey(): string;
    setKey(value: string): Spec;
    getValue(): string;
    setValue(value: string): Spec;

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
    setId(value: string): Product;
    getPrice(): number;
    setPrice(value: number): Product;
    getName(): string;
    setName(value: string): Product;
    getDescription(): string;
    setDescription(value: string): Product;
    getBrand(): string;
    setBrand(value: string): Product;
    getCategory(): string;
    setCategory(value: string): Product;
    getSubcategory(): string;
    setSubcategory(value: string): Product;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): utils_pb.Address | undefined;
    setAddress(value?: utils_pb.Address): Product;
    getSeller(): string;
    setSeller(value: string): Product;
    getStatus(): Product.Status;
    setStatus(value: Product.Status): Product;

    hasUploaddate(): boolean;
    clearUploaddate(): void;
    getUploaddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUploaddate(value?: google_protobuf_timestamp_pb.Timestamp): Product;
    clearSpecList(): void;
    getSpecList(): Array<Spec>;
    setSpecList(value: Array<Spec>): Product;
    addSpec(value?: Spec, index?: number): Spec;
    clearPhotourlList(): void;
    getPhotourlList(): Array<string>;
    setPhotourlList(value: Array<string>): Product;
    addPhotourl(value: string, index?: number): string;

    hasMfdate(): boolean;
    clearMfdate(): void;
    getMfdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setMfdate(value?: google_protobuf_timestamp_pb.Timestamp): Product;
    clearLikesList(): void;
    getLikesList(): Array<string>;
    setLikesList(value: Array<string>): Product;
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
        status: Product.Status,
        uploaddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        specList: Array<Spec.AsObject>,
        photourlList: Array<string>,
        mfdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        likesList: Array<string>,
    }

    export enum Status {
    SOLD = 0,
    UNSOLD = 1,
    }

}

export class CreateProductRequest extends jspb.Message { 
    getPrice(): number;
    setPrice(value: number): CreateProductRequest;
    getName(): string;
    setName(value: string): CreateProductRequest;
    getDescription(): string;
    setDescription(value: string): CreateProductRequest;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): utils_pb.Address | undefined;
    setAddress(value?: utils_pb.Address): CreateProductRequest;
    getSeller(): string;
    setSeller(value: string): CreateProductRequest;
    clearSpecList(): void;
    getSpecList(): Array<Spec>;
    setSpecList(value: Array<Spec>): CreateProductRequest;
    addSpec(value?: Spec, index?: number): Spec;
    clearPhotourlList(): void;
    getPhotourlList(): Array<string>;
    setPhotourlList(value: Array<string>): CreateProductRequest;
    addPhotourl(value: string, index?: number): string;

    hasMfdate(): boolean;
    clearMfdate(): void;
    getMfdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setMfdate(value?: google_protobuf_timestamp_pb.Timestamp): CreateProductRequest;
    getBrand(): string;
    setBrand(value: string): CreateProductRequest;
    getCategory(): string;
    setCategory(value: string): CreateProductRequest;
    getSubcategory(): string;
    setSubcategory(value: string): CreateProductRequest;

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
    setPrice(value: number): UpdateProductRequest;
    getName(): string;
    setName(value: string): UpdateProductRequest;
    getDescription(): string;
    setDescription(value: string): UpdateProductRequest;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): utils_pb.Address | undefined;
    setAddress(value?: utils_pb.Address): UpdateProductRequest;
    getStatus(): UpdateProductRequest.Status;
    setStatus(value: UpdateProductRequest.Status): UpdateProductRequest;
    clearSpecList(): void;
    getSpecList(): Array<Spec>;
    setSpecList(value: Array<Spec>): UpdateProductRequest;
    addSpec(value?: Spec, index?: number): Spec;
    clearPhotourlList(): void;
    getPhotourlList(): Array<string>;
    setPhotourlList(value: Array<string>): UpdateProductRequest;
    addPhotourl(value: string, index?: number): string;

    hasMfdate(): boolean;
    clearMfdate(): void;
    getMfdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setMfdate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateProductRequest;
    getBrand(): string;
    setBrand(value: string): UpdateProductRequest;
    getCategory(): string;
    setCategory(value: string): UpdateProductRequest;
    getSubcategory(): string;
    setSubcategory(value: string): UpdateProductRequest;

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
        status: UpdateProductRequest.Status,
        specList: Array<Spec.AsObject>,
        photourlList: Array<string>,
        mfdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        brand: string,
        category: string,
        subcategory: string,
    }

    export enum Status {
    SOLD = 0,
    UNSOLD = 1,
    }

}

export class DeleteProductRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteProductRequest;

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
    setProductList(value: Array<Product>): Products;
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
    setSpecList(value: Array<Spec>): FilterRequest;
    addSpec(value?: Spec, index?: number): Spec;
    getMinPrice(): number;
    setMinPrice(value: number): FilterRequest;
    getMaxPrice(): number;
    setMaxPrice(value: number): FilterRequest;
    getCategory(): string;
    setCategory(value: string): FilterRequest;
    getSubcategory(): string;
    setSubcategory(value: string): FilterRequest;
    clearBrandList(): void;
    getBrandList(): Array<string>;
    setBrandList(value: Array<string>): FilterRequest;
    addBrand(value: string, index?: number): string;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): utils_pb.Address | undefined;
    setAddress(value?: utils_pb.Address): FilterRequest;

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
    setVal(value: string): SearchRequest;

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
    setOffset(value: number): Pagination;
    getLimit(): number;
    setLimit(value: number): Pagination;
    getToken(): string;
    setToken(value: string): Pagination;

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
