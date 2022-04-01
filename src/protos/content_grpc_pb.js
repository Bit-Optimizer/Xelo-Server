// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var content_pb = require('./content_pb.js');
var utils_pb = require('./utils_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_protos_CreateProductRequest(arg) {
  if (!(arg instanceof content_pb.CreateProductRequest)) {
    throw new Error('Expected argument of type protos.CreateProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateProductRequest(buffer_arg) {
  return content_pb.CreateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteProductRequest(arg) {
  if (!(arg instanceof content_pb.DeleteProductRequest)) {
    throw new Error('Expected argument of type protos.DeleteProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteProductRequest(buffer_arg) {
  return content_pb.DeleteProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_Empty(arg) {
  if (!(arg instanceof utils_pb.Empty)) {
    throw new Error('Expected argument of type protos.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_Empty(buffer_arg) {
  return utils_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_FilterRequest(arg) {
  if (!(arg instanceof content_pb.FilterRequest)) {
    throw new Error('Expected argument of type protos.FilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_FilterRequest(buffer_arg) {
  return content_pb.FilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_Pagination(arg) {
  if (!(arg instanceof content_pb.Pagination)) {
    throw new Error('Expected argument of type protos.Pagination');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_Pagination(buffer_arg) {
  return content_pb.Pagination.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_Product(arg) {
  if (!(arg instanceof content_pb.Product)) {
    throw new Error('Expected argument of type protos.Product');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_Product(buffer_arg) {
  return content_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_Products(arg) {
  if (!(arg instanceof content_pb.Products)) {
    throw new Error('Expected argument of type protos.Products');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_Products(buffer_arg) {
  return content_pb.Products.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_SearchRequest(arg) {
  if (!(arg instanceof content_pb.SearchRequest)) {
    throw new Error('Expected argument of type protos.SearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_SearchRequest(buffer_arg) {
  return content_pb.SearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateProductRequest(arg) {
  if (!(arg instanceof content_pb.UpdateProductRequest)) {
    throw new Error('Expected argument of type protos.UpdateProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateProductRequest(buffer_arg) {
  return content_pb.UpdateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContentServiceService = exports.ContentServiceService = {
  registerProduct: {
    path: '/protos.ContentService/registerProduct',
    requestStream: false,
    responseStream: false,
    requestType: content_pb.CreateProductRequest,
    responseType: content_pb.Product,
    requestSerialize: serialize_protos_CreateProductRequest,
    requestDeserialize: deserialize_protos_CreateProductRequest,
    responseSerialize: serialize_protos_Product,
    responseDeserialize: deserialize_protos_Product,
  },
  updateProduct: {
    path: '/protos.ContentService/updateProduct',
    requestStream: false,
    responseStream: false,
    requestType: content_pb.UpdateProductRequest,
    responseType: content_pb.Product,
    requestSerialize: serialize_protos_UpdateProductRequest,
    requestDeserialize: deserialize_protos_UpdateProductRequest,
    responseSerialize: serialize_protos_Product,
    responseDeserialize: deserialize_protos_Product,
  },
  deleteProduct: {
    path: '/protos.ContentService/deleteProduct',
    requestStream: false,
    responseStream: false,
    requestType: content_pb.DeleteProductRequest,
    responseType: utils_pb.Empty,
    requestSerialize: serialize_protos_DeleteProductRequest,
    requestDeserialize: deserialize_protos_DeleteProductRequest,
    responseSerialize: serialize_protos_Empty,
    responseDeserialize: deserialize_protos_Empty,
  },
  getAllProducts: {
    path: '/protos.ContentService/getAllProducts',
    requestStream: false,
    responseStream: false,
    requestType: utils_pb.Empty,
    responseType: content_pb.Products,
    requestSerialize: serialize_protos_Empty,
    requestDeserialize: deserialize_protos_Empty,
    responseSerialize: serialize_protos_Products,
    responseDeserialize: deserialize_protos_Products,
  },
  getSomeProducts: {
    path: '/protos.ContentService/getSomeProducts',
    requestStream: false,
    responseStream: false,
    requestType: content_pb.Pagination,
    responseType: content_pb.Products,
    requestSerialize: serialize_protos_Pagination,
    requestDeserialize: deserialize_protos_Pagination,
    responseSerialize: serialize_protos_Products,
    responseDeserialize: deserialize_protos_Products,
  },
  getProductsByFilter: {
    path: '/protos.ContentService/getProductsByFilter',
    requestStream: false,
    responseStream: false,
    requestType: content_pb.FilterRequest,
    responseType: content_pb.Products,
    requestSerialize: serialize_protos_FilterRequest,
    requestDeserialize: deserialize_protos_FilterRequest,
    responseSerialize: serialize_protos_Products,
    responseDeserialize: deserialize_protos_Products,
  },
  getProductsBySearch: {
    path: '/protos.ContentService/getProductsBySearch',
    requestStream: false,
    responseStream: false,
    requestType: content_pb.SearchRequest,
    responseType: content_pb.Products,
    requestSerialize: serialize_protos_SearchRequest,
    requestDeserialize: deserialize_protos_SearchRequest,
    responseSerialize: serialize_protos_Products,
    responseDeserialize: deserialize_protos_Products,
  },
};

exports.ContentServiceClient = grpc.makeGenericClientConstructor(ContentServiceService);
