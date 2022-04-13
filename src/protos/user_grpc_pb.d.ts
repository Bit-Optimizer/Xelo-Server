// package: protos
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";
import * as utils_pb from "./utils_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerUser: IUserServiceService_IregisterUser;
    updateUser: IUserServiceService_IupdateUser;
    loginUser: IUserServiceService_IloginUser;
    getUser: IUserServiceService_IgetUser;
}

interface IUserServiceService_IregisterUser extends grpc.MethodDefinition<user_pb.RegisterUserRequest, utils_pb.Empty> {
    path: "/protos.UserService/registerUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.RegisterUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.RegisterUserRequest>;
    responseSerialize: grpc.serialize<utils_pb.Empty>;
    responseDeserialize: grpc.deserialize<utils_pb.Empty>;
}
interface IUserServiceService_IupdateUser extends grpc.MethodDefinition<user_pb.UpdateUserRequest, utils_pb.Empty> {
    path: "/protos.UserService/updateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<utils_pb.Empty>;
    responseDeserialize: grpc.deserialize<utils_pb.Empty>;
}
interface IUserServiceService_IloginUser extends grpc.MethodDefinition<utils_pb.Empty, user_pb.LoginResponse> {
    path: "/protos.UserService/loginUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<utils_pb.Empty>;
    requestDeserialize: grpc.deserialize<utils_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<user_pb.LoginResponse>;
}
interface IUserServiceService_IgetUser extends grpc.MethodDefinition<utils_pb.Empty, user_pb.User> {
    path: "/protos.UserService/getUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<utils_pb.Empty>;
    requestDeserialize: grpc.deserialize<utils_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    registerUser: grpc.handleUnaryCall<user_pb.RegisterUserRequest, utils_pb.Empty>;
    updateUser: grpc.handleUnaryCall<user_pb.UpdateUserRequest, utils_pb.Empty>;
    loginUser: grpc.handleUnaryCall<utils_pb.Empty, user_pb.LoginResponse>;
    getUser: grpc.handleUnaryCall<utils_pb.Empty, user_pb.User>;
}

export interface IUserServiceClient {
    registerUser(request: user_pb.RegisterUserRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    loginUser(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    loginUser(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    loginUser(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    getUser(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public registerUser(request: user_pb.RegisterUserRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerUser(request: user_pb.RegisterUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public loginUser(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public loginUser(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public loginUser(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}
