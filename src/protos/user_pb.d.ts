// package: protos
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as utils_pb from "./utils_pb";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getName(): string;
    setName(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getPhone(): string;
    setPhone(value: string): User;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): utils_pb.Address | undefined;
    setAddress(value?: utils_pb.Address): User;
    getProfile(): string;
    setProfile(value: string): User;
    getRatecount(): number;
    setRatecount(value: number): User;
    getRating(): number;
    setRating(value: number): User;
    clearWishlistList(): void;
    getWishlistList(): Array<string>;
    setWishlistList(value: Array<string>): User;
    addWishlist(value: string, index?: number): string;
    clearProductsList(): void;
    getProductsList(): Array<string>;
    setProductsList(value: Array<string>): User;
    addProducts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        name: string,
        email: string,
        phone: string,
        address?: utils_pb.Address.AsObject,
        profile: string,
        ratecount: number,
        rating: number,
        wishlistList: Array<string>,
        productsList: Array<string>,
    }
}

export class RegisterUserRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): RegisterUserRequest;
    getName(): string;
    setName(value: string): RegisterUserRequest;
    getEmail(): string;
    setEmail(value: string): RegisterUserRequest;
    getPhone(): string;
    setPhone(value: string): RegisterUserRequest;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): utils_pb.Address | undefined;
    setAddress(value?: utils_pb.Address): RegisterUserRequest;
    getProfile(): string;
    setProfile(value: string): RegisterUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
    static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
    export type AsObject = {
        id: string,
        name: string,
        email: string,
        phone: string,
        address?: utils_pb.Address.AsObject,
        profile: string,
    }
}

export class UpdateUserRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): UpdateUserRequest;
    getPhone(): string;
    setPhone(value: string): UpdateUserRequest;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): utils_pb.Address | undefined;
    setAddress(value?: utils_pb.Address): UpdateUserRequest;
    getProfile(): string;
    setProfile(value: string): UpdateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
    static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
    export type AsObject = {
        name: string,
        phone: string,
        address?: utils_pb.Address.AsObject,
        profile: string,
    }
}

export class LoginResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): LoginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        status: boolean,
    }
}
