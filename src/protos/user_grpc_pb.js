// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var utils_pb = require('./utils_pb.js');

function serialize_protos_Empty(arg) {
  if (!(arg instanceof utils_pb.Empty)) {
    throw new Error('Expected argument of type protos.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_Empty(buffer_arg) {
  return utils_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_LoginResponse(arg) {
  if (!(arg instanceof user_pb.LoginResponse)) {
    throw new Error('Expected argument of type protos.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_LoginResponse(buffer_arg) {
  return user_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_RegisterUserRequest(arg) {
  if (!(arg instanceof user_pb.RegisterUserRequest)) {
    throw new Error('Expected argument of type protos.RegisterUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_RegisterUserRequest(buffer_arg) {
  return user_pb.RegisterUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateUserRequest(arg) {
  if (!(arg instanceof user_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type protos.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateUserRequest(buffer_arg) {
  return user_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type protos.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  registerUser: {
    path: '/protos.UserService/registerUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.RegisterUserRequest,
    responseType: user_pb.User,
    requestSerialize: serialize_protos_RegisterUserRequest,
    requestDeserialize: deserialize_protos_RegisterUserRequest,
    responseSerialize: serialize_protos_User,
    responseDeserialize: deserialize_protos_User,
  },
  updateUser: {
    path: '/protos.UserService/updateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateUserRequest,
    responseType: user_pb.User,
    requestSerialize: serialize_protos_UpdateUserRequest,
    requestDeserialize: deserialize_protos_UpdateUserRequest,
    responseSerialize: serialize_protos_User,
    responseDeserialize: deserialize_protos_User,
  },
  loginUser: {
    path: '/protos.UserService/loginUser',
    requestStream: false,
    responseStream: false,
    requestType: utils_pb.Empty,
    responseType: user_pb.LoginResponse,
    requestSerialize: serialize_protos_Empty,
    requestDeserialize: deserialize_protos_Empty,
    responseSerialize: serialize_protos_LoginResponse,
    responseDeserialize: deserialize_protos_LoginResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
