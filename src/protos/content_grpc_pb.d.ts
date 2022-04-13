// package: protos
// file: content.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as content_pb from "./content_pb";
import * as utils_pb from "./utils_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IContentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerProduct: IContentServiceService_IregisterProduct;
    updateProduct: IContentServiceService_IupdateProduct;
    deleteProduct: IContentServiceService_IdeleteProduct;
    getAllProducts: IContentServiceService_IgetAllProducts;
    getSomeProducts: IContentServiceService_IgetSomeProducts;
    getProductsByFilter: IContentServiceService_IgetProductsByFilter;
    getProductsBySearch: IContentServiceService_IgetProductsBySearch;
}

interface IContentServiceService_IregisterProduct extends grpc.MethodDefinition<content_pb.CreateProductRequest, content_pb.Product> {
    path: "/protos.ContentService/registerProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_pb.CreateProductRequest>;
    requestDeserialize: grpc.deserialize<content_pb.CreateProductRequest>;
    responseSerialize: grpc.serialize<content_pb.Product>;
    responseDeserialize: grpc.deserialize<content_pb.Product>;
}
interface IContentServiceService_IupdateProduct extends grpc.MethodDefinition<content_pb.UpdateProductRequest, content_pb.Product> {
    path: "/protos.ContentService/updateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_pb.UpdateProductRequest>;
    requestDeserialize: grpc.deserialize<content_pb.UpdateProductRequest>;
    responseSerialize: grpc.serialize<content_pb.Product>;
    responseDeserialize: grpc.deserialize<content_pb.Product>;
}
interface IContentServiceService_IdeleteProduct extends grpc.MethodDefinition<content_pb.DeleteProductRequest, utils_pb.Empty> {
    path: "/protos.ContentService/deleteProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_pb.DeleteProductRequest>;
    requestDeserialize: grpc.deserialize<content_pb.DeleteProductRequest>;
    responseSerialize: grpc.serialize<utils_pb.Empty>;
    responseDeserialize: grpc.deserialize<utils_pb.Empty>;
}
interface IContentServiceService_IgetAllProducts extends grpc.MethodDefinition<utils_pb.Empty, content_pb.Products> {
    path: "/protos.ContentService/getAllProducts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<utils_pb.Empty>;
    requestDeserialize: grpc.deserialize<utils_pb.Empty>;
    responseSerialize: grpc.serialize<content_pb.Products>;
    responseDeserialize: grpc.deserialize<content_pb.Products>;
}
interface IContentServiceService_IgetSomeProducts extends grpc.MethodDefinition<content_pb.Pagination, content_pb.Products> {
    path: "/protos.ContentService/getSomeProducts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_pb.Pagination>;
    requestDeserialize: grpc.deserialize<content_pb.Pagination>;
    responseSerialize: grpc.serialize<content_pb.Products>;
    responseDeserialize: grpc.deserialize<content_pb.Products>;
}
interface IContentServiceService_IgetProductsByFilter extends grpc.MethodDefinition<content_pb.FilterRequest, content_pb.Products> {
    path: "/protos.ContentService/getProductsByFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_pb.FilterRequest>;
    requestDeserialize: grpc.deserialize<content_pb.FilterRequest>;
    responseSerialize: grpc.serialize<content_pb.Products>;
    responseDeserialize: grpc.deserialize<content_pb.Products>;
}
interface IContentServiceService_IgetProductsBySearch extends grpc.MethodDefinition<content_pb.SearchRequest, content_pb.Products> {
    path: "/protos.ContentService/getProductsBySearch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_pb.SearchRequest>;
    requestDeserialize: grpc.deserialize<content_pb.SearchRequest>;
    responseSerialize: grpc.serialize<content_pb.Products>;
    responseDeserialize: grpc.deserialize<content_pb.Products>;
}

export const ContentServiceService: IContentServiceService;

export interface IContentServiceServer extends grpc.UntypedServiceImplementation {
    registerProduct: grpc.handleUnaryCall<content_pb.CreateProductRequest, content_pb.Product>;
    updateProduct: grpc.handleUnaryCall<content_pb.UpdateProductRequest, content_pb.Product>;
    deleteProduct: grpc.handleUnaryCall<content_pb.DeleteProductRequest, utils_pb.Empty>;
    getAllProducts: grpc.handleUnaryCall<utils_pb.Empty, content_pb.Products>;
    getSomeProducts: grpc.handleUnaryCall<content_pb.Pagination, content_pb.Products>;
    getProductsByFilter: grpc.handleUnaryCall<content_pb.FilterRequest, content_pb.Products>;
    getProductsBySearch: grpc.handleUnaryCall<content_pb.SearchRequest, content_pb.Products>;
}

export interface IContentServiceClient {
    registerProduct(request: content_pb.CreateProductRequest, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    registerProduct(request: content_pb.CreateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    registerProduct(request: content_pb.CreateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    updateProduct(request: content_pb.UpdateProductRequest, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    updateProduct(request: content_pb.UpdateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    updateProduct(request: content_pb.UpdateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    deleteProduct(request: content_pb.DeleteProductRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteProduct(request: content_pb.DeleteProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteProduct(request: content_pb.DeleteProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    getAllProducts(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    getAllProducts(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    getAllProducts(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    getSomeProducts(request: content_pb.Pagination, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    getSomeProducts(request: content_pb.Pagination, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    getSomeProducts(request: content_pb.Pagination, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    getProductsByFilter(request: content_pb.FilterRequest, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    getProductsByFilter(request: content_pb.FilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    getProductsByFilter(request: content_pb.FilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    getProductsBySearch(request: content_pb.SearchRequest, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    getProductsBySearch(request: content_pb.SearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    getProductsBySearch(request: content_pb.SearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
}

export class ContentServiceClient extends grpc.Client implements IContentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public registerProduct(request: content_pb.CreateProductRequest, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    public registerProduct(request: content_pb.CreateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    public registerProduct(request: content_pb.CreateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    public updateProduct(request: content_pb.UpdateProductRequest, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    public updateProduct(request: content_pb.UpdateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    public updateProduct(request: content_pb.UpdateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Product) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: content_pb.DeleteProductRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: content_pb.DeleteProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: content_pb.DeleteProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public getAllProducts(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    public getAllProducts(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    public getAllProducts(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    public getSomeProducts(request: content_pb.Pagination, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    public getSomeProducts(request: content_pb.Pagination, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    public getSomeProducts(request: content_pb.Pagination, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    public getProductsByFilter(request: content_pb.FilterRequest, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    public getProductsByFilter(request: content_pb.FilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    public getProductsByFilter(request: content_pb.FilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    public getProductsBySearch(request: content_pb.SearchRequest, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    public getProductsBySearch(request: content_pb.SearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
    public getProductsBySearch(request: content_pb.SearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.Products) => void): grpc.ClientUnaryCall;
}
